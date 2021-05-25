import React from 'react';
import { useHistory } from 'react-router';
import { RiArrowGoBackLine as ArrowIcon } from 'react-icons/ri'
import './GoBackButton.scss';

interface Props {
    big?: boolean;
}

const GoBackButton: React.FC<Props> = ({ big }) => {
    const history = useHistory()
    const handleChange = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        history.goBack()
    };
    return (
        <button onClick={handleChange} className={`goBack ${big ? 'big' : ''}`}>
            <ArrowIcon />
        </button>
    );
};

export default GoBackButton;
