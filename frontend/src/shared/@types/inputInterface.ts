import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

export interface InputProps {
    id: string;
    label: string;
    errors?: FieldError;
    register: UseFormRegister<FieldValues>;
    required?: boolean;
    disabled?: boolean;
    type: React.HTMLInputTypeAttribute;
  }
  