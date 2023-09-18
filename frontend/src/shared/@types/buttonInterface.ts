export interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
}
