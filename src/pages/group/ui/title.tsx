import React, { useContext } from 'react';
import { GroupContext } from '../provider/group-provider';

const Title = () => {

    const context = useContext(GroupContext)

    return (
        <div className='group-page__title'>
            <div className='group-page__group-title'>
                <span>{context.group?.groupTitle}</span>
            </div>
            <div className='group-page__course-title'>
                <span>Курс:</span>
                <span> {context.group?.courseTitle}</span>
            </div>
        </div>
    );
};

export default Title;