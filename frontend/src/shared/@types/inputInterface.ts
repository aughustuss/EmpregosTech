import { ChangeEventHandler } from "react";
import { FieldError, UseFormRegister, FieldValues } from "react-hook-form";

export interface InputProps{
    id: string;
    label?: string;
    errors?: FieldError;
    required?: boolean;
    disabled?: boolean;
    type: React.HTMLInputTypeAttribute;
    value?: string | ReadonlyArray<string> | number | undefined | any;
    onChange?: ChangeEventHandler<any> | undefined;
    placeholder?: string | undefined;
    errorMsg?: string;
  }
  