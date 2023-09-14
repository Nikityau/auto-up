import React from 'react';

type Props = {
    name: string,
    surname: string,
    patronymic?: string
}

const Fio = ({
    name,
    surname,
    patronymic
}:Props) => {
    return (
        <div className='student-day-card__fio'>
            <div className='student-day-card__fio-title'>
                 <span>Ф.И.О.</span>
            </div>
            <div className='student-day-card__name'>
                <span>{surname} {name}</span>
            </div>
        </div>
    );
};

export default Fio;