import React from 'react';
import { sponsors } from '../data/sponsors';

const Sponsors = () => {
    return (
        <div className='sponsors'>
            {
                sponsors.map(s => (
                    <img src={s.img} key={s.id} alt={'sponsor'}/>
                ))
            }
        </div>
    );
};

export default Sponsors;