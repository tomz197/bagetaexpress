import { JSXElementConstructor } from "react";
import { Button } from "../ui/button";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href: string;
  text?: string;
  Icon?: JSXElementConstructor<any>;
}

export default function NavButton({ href, text, Icon, ...props }: IProps) {
  return (
    <a href={href}>
      <Button variant="ghost" {...props}>
        {text}
        {Icon && <Icon className="ml-2 h-5 w-5" />}
      </Button>
    </a>
  );
}