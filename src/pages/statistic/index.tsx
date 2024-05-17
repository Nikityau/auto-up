import React from 'react';
import TotalStatisticChart from "../../widget/total-statistic-chart";
import TopDownloadApps from "../../widget/top-download-apps";
import UsersList from "../../widget/users-list";

import './index.scss'

const Statistic = () => {
    return (
        <div className={'statistic'}>
            <div className={'statistic__apps'}>
                <TotalStatisticChart/>
                <TopDownloadApps/>
            </div>
            <div className={'statistic__users'}>
                <UsersList/>
            </div>
        </div>
    );
};

export default Statistic;