import React from 'react';
import { observer } from 'mobx-react-lite';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules'
import { DayScheduleStore } from '../store/day-schedule-store';
import StudentDayCard from '../../../enteties/student-day-card';

import 'swiper/css'

type Props = {
    schedule: DayScheduleStore
}

const StudentsList = observer(({ schedule }: Props) => {
    return (
        <div className='schedule-day__students-list'>
            <Swiper
                direction='vertical'
                slidesPerView={'auto'}
                spaceBetween={16}
                mousewheel={true}
                modules={[
                    Mousewheel
                ]}
            >
                {
                    schedule.students.map((st, i) => (
                        <SwiperSlide
                            key={st.id}
                        >
                            <StudentDayCard 
                                id={st.id}
                                avatar={st.avatar}
                                name={st.name}
                                surname={st.surname}
                                patronymic={st.patronymic}
                                isIn={st.isIn}
                                position={i + 1}
                                onSetStatus={({status, studentId}) => {
                                    schedule.setStudentStatus(studentId, status)
                                }}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
});

export default StudentsList;