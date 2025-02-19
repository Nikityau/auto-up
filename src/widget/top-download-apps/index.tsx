import React, {useState} from 'react';
import {TTopDownApps} from "./index.types";
import {topDownloadApps} from "./data";
import DownApp from "./ui/down-app";

import './style/index.scss'
import {Link} from "react-router-dom";

const TopDownloadApps = () => {
    const [apps, setApps] = useState<Array<TTopDownApps>>(topDownloadApps)

    const getClassName = (i: number): string => {
        if (i === 0) return 'down-app_b_r'
        if (i === 2) return 'down-app_b_l'

        return ''
    }

    return (
        <div className={'top-download-apps'}>
            <div className={'top-download-apps__header'}>
                <span>Топ скачиваемых файлов</span>
                <Link to={'/auto-up/inside/all-files'}>
                    <svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM33.7071 8.70711C34.0976 8.31658 34.0976 7.68342 33.7071 7.29289L27.3431 0.928932C26.9526 0.538408 26.3195 0.538408 25.9289 0.928932C25.5384 1.31946 25.5384 1.95262 25.9289 2.34315L31.5858 8L25.9289 13.6569C25.5384 14.0474 25.5384 14.6805 25.9289 15.0711C26.3195 15.4616 26.9526 15.4616 27.3431 15.0711L33.7071 8.70711ZM1 9H33V7H1V9Z"
                            fill="#FDFDFD"/>
                    </svg>
                </Link>
            </div>
            <div className={'top-download-apps__list'}>
                {
                    apps.map((app, i) => (
                        <DownApp
                            className={getClassName(i)}
                            pos={i + 1}
                            key={app.id}
                            title={app.title}
                            id={app.id}
                            icon={app.icon}
                            rate={app.rate}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default TopDownloadApps;