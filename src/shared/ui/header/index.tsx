import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

type IHeaderProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;
const Header = ({ className, ...props }: IHeaderProps): ReactNode => {
  return (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h2
      className={
        "text-2xl font-bold tracking-tight text-foreground-light dark:text-foreground-dark " +
        className
      }
      {...props}
    />
  );
};

export default Header;
