import React from 'react';
import StatusBlock from './status-block';
import { nanoid } from 'nanoid';
import {studentAttendance} from "../data/student-info";

const StatusLessons = () => {

    const isWas = (i: number) => {
        if(studentAttendance.attendance[i]) {
           if(studentAttendance.attendance[i].was) {
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
                    Array.from({ length: studentAttendance.lessons_count }).map((st, i) => (
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