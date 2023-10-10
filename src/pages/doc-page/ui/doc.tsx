import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import { DocPageContext } from "../provider/doc-page-provider";
import DocModule from "./module";

import "swiper/css";

const Doc = () => {

  const { doc } = useContext(DocPageContext);

  if (!doc) {
    return null;
  }

  return (
    <div className="doc-page__doc">
      {
        doc.modules &&
        <Swiper
          //@ts-ignore
          direction={"vertical"}
          slidesPerView={"auto"}
          spaceBetween={60}
          mousewheel={true}
          freeMode={true}
          modules={[
            Mousewheel
          ]}
        >
          {
            doc.modules.map((doc, i) => (
              <SwiperSlide key={doc.id}>
                <DocModule
                  module={doc}
                  number={i + 1}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      }
    </div>
  );
};

export default Doc;