import React, {useContext} from "react";
import {Mousewheel} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import StudentSuccessCard from "../../../enteties/student-success-card";
import {StudentInfoContext} from "../provider";

import "swiper/css";


const SuccessList = () => {

    const {user, success} = useContext(StudentInfoContext);

    return (
        <div className="success-list">
            <Swiper
                //@ts-ignore
                direction={"vertical"}
                slidesPerView={"auto"}
                spaceBetween={40}
                mousewheel={true}
                modules={[
                    Mousewheel
                ]}
            >
                {
                    success.success?.map((el, i) => (
                        <SwiperSlide key={el.lessonId}>
                            <StudentSuccessCard
                                groupId={user.groupId}
                                studentId={user.id}
                                lessonNumber={i + 1}
                                theme={el.theme}
                                isWas={el.studentAttend}
                                lessonWas={true}
                                tasks={el.tasks}
                                courseId={user.courseId}
                                lessonId={el.lessonId}
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default SuccessList;