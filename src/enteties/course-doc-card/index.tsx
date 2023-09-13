import React from 'react';

import './style/index.scss'

type Props = {
    id: string
    title: string
    preview: string
}

const CourseDocCard = ({ id, preview, title }: Props) => {
    return (
        <div className='course-doc-card'>
            <div className='course-doc-card__title'>
                <p>Курс программирования</p>
                <p>{title}</p>
            </div>
            <div className='course-doc-card__btn'>
                <span>Продолжить</span>
                <div className='course-doc-card__continue'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M10 17L15 12L10 7" stroke="white" />
                    </svg>
                </div>
            </div>
            <div className='course-doc-card__preview'>
                <img src={preview} alt={'preview'} />
            </div>
        </div>
    );
};

export default CourseDocCard;