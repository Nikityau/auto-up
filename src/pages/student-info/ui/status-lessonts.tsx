import React from 'react';
import { stAttStatus } from '../data/student';
import StatusBlock from './status-block';
import { nanoid } from 'nanoid';

const StatusLessons = () => {

    const isWas = (i: number) => {
        if(stAttStatus.attendence[i]) {
           if(stAttStatus.attendence[i].was) {
                return 'bg_green'
           } 

           return 'bg_red'
        }

        return null
    }

    return (
        <div className='status-lessons'>
            <div className='status-lessons__title'>
                <span>Весь курс</span>
            </div>
            <div className='status-lessons__lessons'>
                {
                    Array.from({ length: stAttStatus.lessons }).map((st, i) => (
                        <StatusBlock
                            key={nanoid()}
                            classNames={[
                                'bg_unk',
                                isWas(i)
                            ]}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default StatusLessons;