import { FormEventHandler, useRef, useState } from "react";
import { TbAlertCircle, TbLoader2 } from "react-icons/tb";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Link } from "react-router-dom";

import { useTheme } from "../providers/ThemeProvider";
import clsx from "clsx";

const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://personal-website-contact-server.onrender.com";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [postError, setPostError] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const theme = useTheme();

  const handleFormSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    const data = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    setDisabled(true);
    setLoading(true);

    const response = await fetch(`${API_URL}/api/v1/submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      formRef && formRef.current?.reset();
      setPostError(false);
      formRef && formRef.current && formRef.current.reset();
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setPostError(true);
    }

    setLoading(false);
  };

  const validateFormData = () => {
    if (
      name.trim().length !== 0 &&
      name.trim().match(/[a-zA-Z0-9\ ]/) &&
      email.trim().length !== 0 &&
      email.trim().match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) &&
      message.trim().length >= 5
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const inputStyle = clsx("max-w-xl p-3 mt-1 rounded-md  placeholder:text-neutral-600", {
    "bg-neutral-900": theme.themeState === "dark",
    "bg-neutral-200/70": theme.themeState === "light",
  });

  return (
    <>
      <Navbar></Navbar>
      <div
        className={clsx("w-11/12 max-w-xl mx-auto mt-8 mb-8 ", {
          "bg-neutral-950 text-neutral-200": theme.themeState === "dark",
          "bg-neutral-100 text-neutral-800": theme.themeState === "light",
        })}
      >
        <h1 className="mx-auto my-4 text-3xl font-bold text-center lg:text-4xl">Let's talk</h1>
        <p className="text-center">
          Check out my{" "}
          <Link to={"/"} className="underline hover:text-neutral-500">
            socials
          </Link>
          , I would love to connect with you!
        </p>
        <p className="text-center">For further queries, you may fill out the form below.</p>
        <form
          className="relative grid gap-2 px-4 py-8 mt-2 text-lg"
          onSubmit={handleFormSubmit}
          onChange={validateFormData}
          ref={formRef}
        >
          {postError && (
            <span className="absolute top-0 flex items-center justify-center w-full gap-4 py-2 text-sm text-white rounded-md bg-red-800/60">
              <TbAlertCircle />
              Error submitting the form. Try again.
            </span>
          )}
          <label htmlFor="nameInput" className="mt-2 ml-1">
            Name
          </label>
          <input
            id="nameInput"
            type="text"
            className={inputStyle}
            placeholder="John"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="emailInput" className="mt-2 ml-1">
            Email
          </label>
          <input
            id="emailInput"
            type="email"
            className={inputStyle}
            placeholder="john@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="messageInput" className="mt-2 ml-1">
            Message
          </label>
          <textarea
            rows={8}
            id="messageInput"
            className={inputStyle}
            placeholder="Hi! I'm looking forward to working with you!"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className={clsx("px-6 py-3 my-4 w-fit rounded-md ml-auto ", {
              "bg-neutral-900/60 text-neutral-600 hover:bg-neutral-900/60": disabled && theme.themeState === "dark",
              "bg-neutral-600/80   hover:bg-slate-500": !disabled && theme.themeState === "dark",
              "bg-neutral-200/60 text-neutral-600 hover:bg-neutral-200/60": disabled && theme.themeState === "light",
              "bg-neutral-200/80   hover:bg-slate-300": !disabled && theme.themeState === "light",
            })}
            disabled={disabled}
          >
            {loading ? (
              <div className="animate-spin">
                <TbLoader2 />
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};
