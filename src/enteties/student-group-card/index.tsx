import React from 'react';
import { Student } from '../../pages/group/helpers/hooks/use-fetch-group';
import { toNormalNum } from '../../shared/helpers/dates/to-normal-num';

import './style/index.scss'
import Control from './ui/control';
import Avatar from './ui/avatar';
import TitleData from './ui/title-data';
import {FType} from "../../shared/helpers/types/f-types";

type Props = {
    position: number,
    onClick?: FType<void, void>
} & Student

const StudentGroupCard = ({
    id,
    attendance,
    avatar,
    enrolled,
    login,
    name,
    password,
    status,
    surname,
    patronymic,
    position,
    onClick
}: Props) => {
    return (
        <div className='student-group-card'>
            <div className='student-group-card__container'>
                <Control
                    position={position}
                />
                <Avatar
                    avatar={avatar}
                />
                <TitleData
                    title='Ф.И.О.'
                    classNames={["student-group-card_fio"]}
                    data={`${surname} ${name}`}
                />
            </div>
            <TitleData
                classNames={[
                    'student-group-card__info_center'
                ]}
                title='Логин'
                data={login}
            />
            <TitleData
                classNames={[
                    'student-group-card__info_center'
                ]}
                title='Пароль'
                data={password}
            />
            <TitleData
                classNames={[
                    'student-group-card__info_center',
                    'student-group-card__info_data_green'
                ]}
                title='Статус'
                data={status}
            />
            <TitleData
                classNames={[
                    'student-group-card__info_center'
                ]}
                title='Посещаемость'
                data={`${attendance}%`}
            />
            <TitleData
                classNames={[
                    'student-group-card__info_center'
                ]}
                title='Зачислен'
                data={toNormalNum(enrolled)}
            />
           {/* <div className='student-group-card__note'/>*/}
        </div>
    );
};

export default StudentGroupCard;