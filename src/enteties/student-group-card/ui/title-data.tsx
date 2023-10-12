import React from 'react';
import cn from 'classnames'

type Props = {
    title: string,
    data: string,
    classNames?: string[]
}

const TitleData = ({classNames, data, title}: Props) => {
    return (
        <div className={cn('student-group-card__info', classNames)}>
            <div className='student-group-card__title'>
                <p>{title}</p>
            </div>
            <div className='student-group-card__data'>
                <p>{data}</p>
            </div>
        </div>
    );
};

export default TitleData;