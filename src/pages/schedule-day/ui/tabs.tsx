import { observer } from 'mobx-react-lite';
import React from 'react';
import { DayScheduleStore } from '../store/day-schedule-store';
import Tab from './tab';

type Props = {
    schedule: DayScheduleStore
}

const Tabs = observer(({schedule}:Props) => {
    return (
        <div className='schedule-day__tabs'>
            {
                schedule.schedule.map((sc, i) => (
                    <Tab
                        key={sc.id}
                        isCurrent={schedule.tab == sc.id}
                        number={i + 1}
                        onClick={() => {
                            schedule.setTab(sc.id)
                        }}
                    />
                ))
            }
        </div>
    );
});

export default Tabs;