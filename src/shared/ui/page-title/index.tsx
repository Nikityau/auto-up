import React from 'react';

import './style/index.scss'

type Props = {
    title: string
}

const TitleUi = ({title}:Props) => {
    return (
        <div className='title-ui'>
            <span>{title}</span>
        </div>
    );
};

export default TitleUi;