import React, { useContext } from 'react';
import { GroupContext } from '../provider/group-provider';
import StudentGroupCard from '../../../enteties/student-group-card';

const Students = () => {

    const context = useContext(GroupContext)

    return (
        <div className='group-page__students'>
            {
                context.group.students.map((s, i) => (
                    <StudentGroupCard 
                        key={s.id}
                        id={s.id}
                        avatar={s.avatar}
                        attendance={s.attendance}
                        enrolled={s.enrolled}
                        login={s.login}
                        name={s.name}
                        password={s.password}
                        position={i + 1}
                        status={s.status}
                        surname={s.surname}
                        patronymic={s.patronymic}
                    />
                ))
            }
        </div>
    );
};

export default Students;