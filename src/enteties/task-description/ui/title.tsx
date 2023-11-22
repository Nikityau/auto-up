import React from 'react';

type Props = {
    title: string
    number: number
}

const Title = ({title, number}:Props) => {
    return (
        <div className={'task-description__title'}>
            <span>Задание {number == 0 ? null : number}</span>
            <span>{title}</span>
        </div>
    );
};

export default Title;