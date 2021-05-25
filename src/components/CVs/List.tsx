import React from 'react';
import { AnimatedList, Item } from '../AnimatedList/AnimatedList'
import PaulaImage from '../../data/paula.png'
import RosarioImage from '../../data/rosario.png'

import './CVs.scss';

const items: Array<Item> = [
  {
    url: 'rosario',
    name: 'Aita, Rosario',
    description: 'Some description',
    image: RosarioImage
  },
  {
    url: 'paula',
    name: 'Mangiaterra, Paula',
    description: 'Some description',
    image: PaulaImage
  },
]


const List: React.FC = (props) => {
  return <AnimatedList items={items} />
};

export default List;
