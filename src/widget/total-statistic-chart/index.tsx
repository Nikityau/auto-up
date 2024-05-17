import React from 'react';
import {TTotalChartStat, TTotalChartType} from "./index.type";
import Chart from "../../entities/chart";
import {chartsData} from "./data";
import TrafficTypes from "./ui/traffic-types";

import './style/index.scss'

const TotalStatisticChart = () => {

    const [chartData, setChartData] = React.useState<TTotalChartStat>(chartsData);
    const [type, setType] = React.useState<TTotalChartType>('total-activity');

    return (
        <div className={'total-statistic-chart'}>
            <TrafficTypes
                current={type}
                onClick={setType}
            />
            <Chart data={chartData?.[type] || []}/>
        </div>
    );
};

export default TotalStatisticChart;