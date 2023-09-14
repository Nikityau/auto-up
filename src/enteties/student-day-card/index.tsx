import React from 'react';
import { FType } from '../../shared/helpers/types/f-types';

import Position from './ui/position';
import Avatar from './ui/avatar';
import Fio from './ui/fio';
import Status from './ui/status';

import './style/index.scss'

type Props = {
    id: string,
    avatar: string,
    name: string,
    surname: string,
    patronymic?: string
    isIn: boolean | null,
    onSetStatus: FType<{studentId: string, status: boolean},void>
    position: number
}

const StudentDayCard = ({
    avatar,
    id,
    isIn,
    name,
    onSetStatus,
    position,
    surname,
    patronymic
}: Props) => {
    return (
        <div className='student-day-card'>
            <Position
                position={position}
            />
            <Avatar
                avatar={avatar}
            />
            <Fio
                name={name}
                surname={surname}
                patronymic={patronymic}
            />
            <Status
                title='Присутствует'
                is={isIn}
                onClick={() => {
                    onSetStatus({
                        studentId: id,
                        status: true
                    })
                }}
            />
            <Status
                title='Отсутвует'
                is={
                    isIn == null ? isIn : !isIn
                }
                onClick={() => {
                    onSetStatus({
                        studentId: id,
                        status: false
                    })
                }}
            />
        </div>
    );
};

export default StudentDayCard;