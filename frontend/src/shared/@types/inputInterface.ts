import { FieldError, UseFormRegister, FieldValues } from "react-hook-form";

export interface InputProps{
    id: string;
    label?: string;
    errors?: FieldError;
    register: UseFormRegister<any>;
    required?: boolean;
    disabled?: boolean;
    type: React.HTMLInputTypeAttribute;
    value?: string | ReadonlyArray<string> | number | undefined | any;
    placeholder?: string | undefined;
  }
  