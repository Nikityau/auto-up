import { observer } from 'mobx-react-lite';
import React from 'react';
import { DayScheduleStore } from '../store/day-schedule-store';

type Props = {
    schedule: DayScheduleStore
}

const UpInfo = observer(({schedule}:Props) => {
    return (
        <div className='schedule-day__up-info'>
            
        </div>
    );
});

export default UpInfo;