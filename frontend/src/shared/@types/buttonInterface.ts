import {IconType} from 'react-icons'
export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  text: string | React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
}
