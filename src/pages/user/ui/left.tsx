import React from 'react';
import CubeData from "./cube-data";
import UserGraphic from "./user-graphic";

const Left = () => {
    return (
        <div className={'user-files__left'}>
            <div className={'user-files__left-wrapper'}>
                <h1>admin1337</h1>
                <span>20.02.2000</span>
                <a
                    href={'mailto:yandex@yandex.ru'}
                    target={'_blank'}
                >
                    yandex@yandex.ru
                </a>
                <div className={'user-files__left-data'}>
                    <CubeData
                        text={'5 Гб'}
                        text2={'скачано всего'}
                    />
                    <CubeData
                        text={'35 Гбит'}
                        text2={'израсходовано трафика'}
                    />
                </div>
            </div>
            <UserGraphic/>
        </div>
    );
};

export default Left;