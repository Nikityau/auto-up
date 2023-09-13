import React from 'react';

import './style/index.scss'

type Props = {
    title: string
}

const PageTitle = ({title}:Props) => {
    return (
        <div className='page-title'> 
            <span>{title}</span>
        </div>
    );
};

export default PageTitle;