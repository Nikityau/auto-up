import React from 'react';

import Title from './ui/title';
import Students from './ui/students';
import Status from './ui/status';

import './style/index.scss'

type Props = {
    id: string,
    groupTitle: string,
    courseTitle: string,
    students: string[],
    status: string
}

const GroupCard = (
    {
        id,
        courseTitle,
        groupTitle,
        status,
        students
    }: Props) => {
    return (
        <div className='group-card'>
            <div className='group-card__container'>
                <Title
                    groupTitle={groupTitle}
                    courseTitle={courseTitle}
                />
                <div className='group-card__points'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M18 10.125C17.3787 10.125 16.875 9.62132 16.875 9C16.875 8.37868 17.3787 7.875 18 7.875C18.6213 7.875 19.125 8.37868 19.125 9C19.125 9.62132 18.6213 10.125 18 10.125Z" />
                        <path d="M18 19.125C17.3787 19.125 16.875 18.6213 16.875 18C16.875 17.3787 17.3787 16.875 18 16.875C18.6213 16.875 19.125 17.3787 19.125 18C19.125 18.6213 18.6213 19.125 18 19.125Z" />
                        <path d="M18 28.125C17.3787 28.125 16.875 27.6213 16.875 27C16.875 26.3787 17.3787 25.875 18 25.875C18.6213 25.875 19.125 26.3787 19.125 27C19.125 27.6213 18.6213 28.125 18 28.125Z" />
                    </svg>
                </div>
            </div>
            <Students
                students={students}
            />
            <Status
                status={status}
            />
        </div>
    );
};

export default GroupCard;