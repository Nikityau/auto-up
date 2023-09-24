import React from 'react';

type Props = {
    description: string[]
}

const Description = ({description}:Props) => {
    return (
        <div className={'task-card__description'}>
            <div className={'task-card__subtitle'}>
                <span>В этом блоке мы узнаем:</span>
            </div>
            <div className={'task-card__descr'}>
                {
                    description.map((d, i) => (
                        <span key={i}>{d}</span>
                    ))
                }
            </div>
        </div>
    );
};

export default Description;