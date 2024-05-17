import React, {FC} from 'react';
import cn from "classnames";

type Props = {
    isActive: boolean,
    title: string
    onClick: () => void
}

const TrafficType: FC<Props> = (
    {
        title,
        onClick,
        isActive
    }) => {
    return (
        <div className={
            cn(
                'traffic-type',
                isActive && 'traffic-type_active'
            )
        } onClick={onClick}
        >
            { title }
        </div>
    );
};

export default TrafficType;