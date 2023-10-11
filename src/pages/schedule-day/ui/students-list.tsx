import React, {useContext} from 'react';
import { observer } from 'mobx-react-lite';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules'
import { DayScheduleStore } from '../store/day-schedule-store';
import StudentDayCard from '../../../enteties/student-day-card';

import 'swiper/css'
import {SchDayContext} from "../provider/schedule-day.provider";

type Props = {
    schedule: DayScheduleStore,
}

const StudentsList = observer(({ schedule }: Props) => {

    const cntx = useContext(SchDayContext)

    return (
        <div className='schedule-day__students-list'>
          {
            schedule.schedule &&
            <Swiper
              //@ts-ignore
              direction={'vertical'}
              slidesPerView={'auto'}
              spaceBetween={16}
              mousewheel={true}
              modules={[
                Mousewheel
              ]}
            >
              {
                schedule?.students?.map((st, i) => (
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
                        cntx.updAtt(status, studentId)
                      }}
                    />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          }
        </div>
    );
});

export default StudentsList;