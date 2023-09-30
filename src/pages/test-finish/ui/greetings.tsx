import React from 'react';

import st from '../assets/student.png'

const Greetings = () => {
    return (
        <div className={'test-finished__greetings'}>
            <div className={'test-finished__title'}>
                <span>Вы прошли урок! Поздравляем!</span>
            </div>
            <div className={'test-finished__img'}>
                <img src={st} alt={'student'}/>
            </div>
        </div>
    );
};

export default Greetings;