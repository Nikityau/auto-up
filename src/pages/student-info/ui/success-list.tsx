import React, { useContext } from "react";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import StudentSuccessCard from "../../../enteties/student-success-card";
import { studentLessons } from "../data/student-info";

import "swiper/css";
import { StudentInfoContext } from "../provider";
import cn from "classnames";
import StudentSuccess from "./student-success";

const SuccessList = () => {

  const { user, success } = useContext(StudentInfoContext);

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
        {/*{
          studentLessons.map((el, i) => (
            <SwiperSlide
              key={el.id}
            >
              <StudentSuccessCard
                lessonId={el.id}
                courseId={user?.courseId}
                lessonWas={el.lesson_was}
                isWas={el.was}
                theme={el.theme}
                lessonNumber={i + 1}
                tasks={el.tasks}
              />
            </SwiperSlide>
          ))
        }*/}
        {
          success.success?.map((el, i) => (
            <SwiperSlide key={el.lessonId}>
              <StudentSuccessCard
                lessonNumber={i + 1}
                theme={el.theme}
                isWas={el.studentAttend}
                lessonWas={true}
                tasks={el.tasks }
                courseId={user.course}
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