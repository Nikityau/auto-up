import React from 'react';
import cn from "classnames";

type Props = {
    was: boolean,
    lessonWas: boolean
}

const StudentStatus = ({was, lessonWas}: Props) => {
    return (
        <>
            {
                lessonWas &&
                <div className={cn(
                    'student-success-card__student-status'
                )}>
                    <span>
                        {
                            was
                                ? 'Присутствовал'
                                : 'Отсутствовал'
                        }
                    </span>
                </div>
            }
        </>
    );
};

export default StudentStatus;