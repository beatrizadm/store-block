import React from 'react';
import { ObjectOption } from './ObjectAtom';
export declare type VerbOption = {
    label: string;
    value: string;
    object: ObjectOption;
};
declare type Props = {
    disabled?: boolean;
    isFullWidth?: boolean;
    verb?: string;
    verbOptions: VerbOption[];
    onChange: (string: any) => void;
};
declare const VerbAtom: React.FC<Props>;
export default VerbAtom;
