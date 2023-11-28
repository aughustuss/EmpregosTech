import { FieldError, UseFormRegister} from "react-hook-form";

export interface RegisterInputProps{
    id: string;
    label?: string;
    errors?: FieldError;
    required?: boolean;
    register: UseFormRegister<any>;
    disabled?: boolean;
    type: React.HTMLInputTypeAttribute;
    placeholder?: string | undefined;
  }
  