import { ReactNode } from "react";

const TextInformation = (): ReactNode => {
  return (
    <div className="flex-1">
      <h1 className="text-4xl md:text-5xl font-black text-foreground-light dark:text-foreground-dark tracking-tighter">
        Artem Scherbinskiy
      </h1>
      <p className="mt-2 text-lg md:text-xl text-primary font-medium">
        Software Developer
      </p>
      <p className="mt-4 max-w-lg text-subtle-light dark:text-subtle-dark">
        Frontend developer with experience in building responsive, user-friendly
        web applications. Skilled in modern JavaScript frameworks and passionate
        about crafting smooth, accessible, and visually engaging user
        interfaces.
      </p>
    </div>
  );
};

export default TextInformation;
