import { FormEventHandler, useRef, useState } from "react";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  const handleFormSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    formRef && formRef.current?.reset();
    setDisabled(true);

    //TODO: post data to server/forms service
    console.log(data);
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

  return (
    <>
      <Navbar></Navbar>
      <div className="w-11/12 max-w-xl mx-auto mt-8 mb-8">
        <h1 className="mx-auto my-4 text-3xl font-bold text-center lg:text-4xl">Let's talk</h1>
        <form className="grid gap-2 px-4 py-8 text-lg" onSubmit={handleFormSubmit} onChange={validateFormData} ref={formRef}>
          <label htmlFor="nameInput" className="mt-2 ml-1">
            Name
          </label>
          <input
            id="nameInput"
            type="text"
            className="max-w-xl p-3 mt-1 rounded-md bg-neutral-900 placeholder:text-neutral-600"
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
            className="max-w-xl p-3 mt-1 rounded-md bg-neutral-900 placeholder:text-neutral-600"
            placeholder="john@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="messageInput" className="mt-2 ml-1">
            Message
          </label>
          <textarea
            rows={8}
            id="messageInput"
            className="max-w-xl p-3 mt-1 rounded-md bg-neutral-900 placeholder:text-neutral-600"
            placeholder="Hi! I'm looking forward to working with you!"
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className={"px-6 py-3 my-4 w-fit rounded-md ml-auto " + (disabled ? "bg-neutral-900/60 text-neutral-600" : "bg-neutral-600/80   hover:bg-slate-500")}
            disabled={disabled}
          >
            Submit
          </button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};
