import { UseFormRegister } from "react-hook-form";

export interface SelectInterfaceProps {
    arrayToMap: Array<string>
    selectId: string;
    text: string
    register: UseFormRegister<any>;
    required?: boolean;
    onSelect: (val: string) => void
    // openSelect?: (val: boolean) => void;
    // selectToOpenId: string | undefined;
    // closeSelect: () => void;
}
