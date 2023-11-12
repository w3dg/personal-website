import clsx from "clsx";
import { useTheme } from "../providers/ThemeProvider";

interface TagProps {
  value: string;
}

export const Tag = ({ value }: TagProps) => {
  const theme = useTheme();
  return (
    <p
      className={clsx("px-2 py-1 text-sm rounded-md shadow-sm", {
        "bg-neutral-600/40": theme.themeState === "dark",
        "bg-neutral-300": theme.themeState === "light",
      })}
    >
      {value}
    </p>
  );
};
