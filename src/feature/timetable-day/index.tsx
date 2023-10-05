import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import TimeGap from "./ui/time-gap";
import { dayTime } from "./data/time";

import "./style/index.scss";
import "swiper/css";

type Props = {} & React.PropsWithChildren

const TimetableDay = ({ children }: Props) => {
  return (
    <div className="timetable-day">
      <Swiper
        modules={[
          Mousewheel
        ]}
        mousewheel={true}
        freeMode={true}
        slidesPerView={"auto"}
        direction={"vertical"}
      >
        {
          dayTime.map((t) => (
            <SwiperSlide
              key={t.id}
            >
              <TimeGap
                time={t.time}
              />
            </SwiperSlide>
          ))
        }
        <SwiperSlide className={'timetable-day__plug'}>
          {children}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TimetableDay;