import { ChangeEventHandler } from "react";
import { UseFormRegister } from "react-hook-form";

export interface SelectInterfaceProps {
    arrayToMap: Array<string>
    selectId: string;
    text: string
    required?: boolean;
    onSelect?: (val: string) => void
    onChange?: ChangeEventHandler<any> | undefined;
    value?: string | ReadonlyArray<string> | number | undefined | any;
}
