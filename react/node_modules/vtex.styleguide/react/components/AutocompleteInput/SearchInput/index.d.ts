import PropTypes from 'prop-types';
import React from 'react';
declare const propTypes: {
    /** Determine if the input's bottom corners should be rounded or not */
    roundedBottom: PropTypes.Requireable<boolean>;
    /** Input value */
    value: PropTypes.Requireable<string>;
    /** Clear event handler */
    onClear: PropTypes.Requireable<(...args: any[]) => any>;
    /** Change event handler */
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    /** Search event handler. Called on enter or when clicking the search button */
    onSearch: PropTypes.Requireable<(...args: any[]) => any>;
    /** Focus event handler */
    onFocus: PropTypes.Requireable<(...args: any[]) => any>;
    /** Blur event handler */
    onBlur: PropTypes.Requireable<(...args: any[]) => any>;
    /** Determine if the input and the button should be disabled */
    disabled: PropTypes.Requireable<boolean>;
};
declare const SearchInput: React.FC<PropTypes.InferProps<typeof propTypes> & Omit<React.HTMLProps<HTMLInputElement>, 'onChange' | 'value'>>;
export default SearchInput;
