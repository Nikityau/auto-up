import React from 'react';

import './style/index.scss'
import { navHistory } from '../../local-store/nav-history/nav-history';

const BackBtn = () => {

    const onPrevClick = () => {
        navHistory.goBack()
    }

    return (
        <div className='back-btn'
            onClick={onPrevClick}
        >
            <div className='back-btn__circle'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14 7L9 12L14 17" stroke="#191617" />
                </svg>
            </div>
            <div className='back-btn__text'>
                <span>Назад</span>
            </div>
        </div>
    );
};

export default BackBtn;