import React, { useContext } from 'react';
import { GroupContext } from '../provider/group-provider';
import StudentGroupCard from '../../../enteties/student-group-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel } from 'swiper/modules';
import { AppRoutes } from 'src/shared/app-routes';

import 'swiper/css';
import { Link } from 'react-router-dom';

const Students = () => {

    const context = useContext(GroupContext)

    return (
        <div className='group-page__students'>
            <Swiper
                //@ts-ignore
                direction='vertical'
                slidesPerView={'auto'}
                mousewheel={true}
                modules={[Mousewheel]}
            >
                {
                    context.group.students.map((s, i) => (
                        <SwiperSlide
                            key={s.id}
                        >
                            <Link to={`students/${s.id}`}>
                                <StudentGroupCard
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
                            </Link>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Students;