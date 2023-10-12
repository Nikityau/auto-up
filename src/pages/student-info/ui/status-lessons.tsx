import React, { useContext } from "react";
import StatusBlock from './status-block';
import { nanoid } from 'nanoid';
import {studentAttendance} from "../data/student-info";
import { StudentInfoContext } from "../provider";

const StatusLessons = () => {

    const {att} = useContext(StudentInfoContext)

    return (
        <div className='status-lessons'>
            <div className='status-lessons__title'>
                <span>Весь курс</span>
            </div>
            <div className='status-lessons__lessons'>
                {/*{
                    Array.from({ length: studentAttendance.lessons_count }).map((st, i) => (
                        <StatusBlock
                            key={nanoid()}
                            classNames={[
                                'bg_unk',
                                isWas(i)
                            ]}
                        />
                    ))
                }*/}
              {
                att?.map(a => (
                  <StatusBlock
                    key={a.id}
                    classNames={[
                      'bg_unk',
                      a.studentAttend ? 'bg_green' : 'bg_red'
                    ]}
                  />
                ))
              }
            </div>
        </div>
    );
};

export default StatusLessons;