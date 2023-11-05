import React from 'react';
import Type from './ui/type';
import { nanoid } from 'nanoid';
import {TimetableType} from '../../local-store/timetable/timtetable-store';
import {Timetable} from "../../local-store/timetable/timetable";

import './style/index.scss'

type Types = {
    id: string,
    type: TimetableType,
    text: string
} 

const types: Types[] = [
    {
        id: nanoid(),
        type: 'day',
        text: 'День'
    },
    {
        id: nanoid(),
        type: 'week',
        text: 'Неделя'
    },
    {
        id: nanoid(),
        type: 'month',
        text: 'Месяц'
    }
]

type Props = {
    timetable: Timetable
}

const TimetableTypes = ({timetable}:Props) => {
    return (
        <div className='timetable-types'>
            {
                types.map(t => (
                    <Type
                        text={t.text}
                        type={t.type}
                        key={t.id}
                        timetable={timetable}
                    />
                ))
            }
        </div>
    );
};

export default TimetableTypes;