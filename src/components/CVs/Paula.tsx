import React from 'react';
import resourceData from '../../data'
import Template from './Template';
import './CVs.scss';

type Language = 'es' | 'en'
interface Props {
    language: Language
}

const Paula: React.FC<Props> = (props) => {
    const { language } = props

    const key = `paula-${language}`
    const data = resourceData.get(key)

    return <Template data={data} />
};

export default Paula;
