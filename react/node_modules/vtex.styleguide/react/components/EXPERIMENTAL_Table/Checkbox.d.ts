import { FC } from 'react';
declare const Checkbox: FC<CheckboxProps>;
export declare type CheckboxProps = {
    id?: string;
    onClick?: (id: string) => void;
    checked?: boolean;
    disabled?: boolean;
    partial?: boolean;
};
export default Checkbox;
