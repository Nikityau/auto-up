import React from 'react';
import StatusBlock from './status-block';
import StatusLessons from './status-lessons';

const AttendanceInfo = () => {
    return (
        <div className='attendence-info'>
            <div className='attendence-info__title'>
                <span>Информация</span>
            </div>
            <div className='attendence-info__status-info'>
                <StatusBlock
                    classNames={[
                        'bg_red'
                    ]}
                    text='Студент отсутствовал'
                />
                <StatusBlock
                    classNames={[
                        'bg_green'
                    ]}
                    text='Студент присутствовал'
                />
            </div> 
            <StatusLessons/>
        </div>
    );
};

export default AttendanceInfo;