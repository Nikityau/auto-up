import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';

import { DocPageContext } from '../provider/doc-page-provider';
import DocModule from './module';

import 'swiper/css'

const Doc = () => {

    const {doc} = useContext(DocPageContext)

    return (
        <div className='doc-page__doc'>
            <Swiper
                direction={'vertical'}
                slidesPerView={'auto'}
                spaceBetween={140}
                mousewheel={true}
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
        </div>
    );
};

export default Doc;