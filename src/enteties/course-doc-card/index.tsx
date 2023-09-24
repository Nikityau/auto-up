import React from 'react';
import ButtonWithIcon from "../../shared/ui/btn-with-icon";

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
            <ButtonWithIcon title={'Продолжить'}/>
            <div className='course-doc-card__preview'>
                <img src={preview} alt={'preview'} />
            </div>
        </div>
    );
};

export default CourseDocCard;