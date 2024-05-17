import React, {FC} from 'react';
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import {TCharData} from "../../widget/total-statistic-chart/index.type";

import './index.scss'

type Props = {
    data: Array<TCharData>
}


const Chart: FC<Props> = (
    {
        data
    }) => {
    return (
        <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 100,
                    }}
                >
                    <Tooltip/>
                    <Area type="monotone" dataKey="pv" stroke="#FDFDFD" fill="#3e5de1"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;