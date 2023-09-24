import React from 'react';

type Props = {
    title: string
}

const Title = ({title}:Props) => {
    return (
        <div className={'task-card__title'}>
            <span>{title}</span>
        </div>
    );
};

export default Title;