import React from 'react';
import {Mousewheel} from "swiper/modules";
import {Swiper, SwiperSlide} from 'swiper/react'
import StudentSuccessCard from '../../../enteties/student-success-card';
import {studentLessons} from "../data/student-info";

import 'swiper/css'

const SuccessList = () => {
    return (
        <div className='success-list'>
            <Swiper
                //@ts-ignore
                direction={'vertical'}
                slidesPerView={'auto'}
                spaceBetween={40}
                mousewheel={true}
                modules={[
                    Mousewheel
                ]}
            >
                {
                    studentLessons.map((el, i) => (
                        <SwiperSlide
                            key={el.id}

                        >
                            <StudentSuccessCard
                                lessonWas={el.lesson_was}
                                isWas={el.was}
                                theme={el.theme}
                                lessonNumber={i + 1}
                                tasks={el.tasks}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default SuccessList;