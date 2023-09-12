import React from 'react';
import Type from './ui/type';
import { nanoid } from 'nanoid';
import { TimetableType, lecturerTimetable } from '../../local-store/timetable/timtetable-store';

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

const TimetableTypes = () => {
    return (
        <div className='timetable-types'>
            {
                types.map(t => (
                    <Type
                        text={t.text}
                        type={t.type}
                        key={t.id}
                        timetable={lecturerTimetable}
                    />
                ))
            }
        </div>
    );
};

export default TimetableTypes;