import React from 'react';
import './ToggleLanguageButton.scss';

interface Props {
    big?: boolean;
    checked: boolean;
    toggle: () => void;
}

const ToggleLanguageButton: React.FC<Props> = (props) => {
    const { checked, toggle, big } = props

    const handleChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        toggle()
    };
    return (
        <button onClick={handleChange} className={`ToggleLanguageButton ${big ? 'big' : ''}`}>
            {checked ? 'ES' : 'EN'}
        </button>
    );
};

export default ToggleLanguageButton;
