import React, {FC} from 'react';
import {TTotalChartType} from "../index.type";
import {trafficTypes} from "../data";
import TrafficType from "./traffic-type";

type Props = {
    current: TTotalChartType
    onClick: (type: TTotalChartType) => void
}

const TrafficTypes: FC<Props> = (
    {
        onClick,
        current
    }) => {
    return (
        <div className={'traffic-types'}>
            {
                trafficTypes.map(tt => (
                    <TrafficType
                        key={tt.type}
                        onClick={() => onClick(tt.type)}
                        title={tt.title}
                        isActive={tt.type === current}
                    />
                ))
            }
        </div>
    );
};

export default TrafficTypes;