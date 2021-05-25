import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import { Link } from 'react-router-dom';
import './AnimatedList.scss';

export type Item = {
    url: string
    image: string
    name: string
    description: string
}

interface Props {
    items: Array<Item>;
}

const AnimatedItem = posed.ul({
    exit: {
        opacity: 0,
        top: -100
    },
    enter: {
        opacity: 1,
        top: 0,
    },
});

export const AnimatedList: React.FC<Props> = (props) => {
    const { items } = props

    return (
        <div className="list">
            <PoseGroup>
                {
                    items.map((item, index) => {
                        const { name, image, description, url } = item;
                        return (
                            <AnimatedItem pose={'enter'} key={`item-${name}-${index}`} className='item'>

                                <img src={image} alt={`${name}-profile`} className='image' />
                                <div className={`content `} >
                                    <h4 className="name">
                                        {name}
                                    </h4>
                                    <p className="description">
                                        {description}
                                    </p>
                                    <Link to={`/${url}`} className='link'>
                                        Go to resume
                                    </Link>
                                </div>

                            </AnimatedItem>
                        );
                    })}
            </PoseGroup>
        </div>
    );
};


