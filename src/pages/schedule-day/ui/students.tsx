import React, { useContext } from 'react';
import TitleUi from '../../../shared/ui/page-title';
import StudentsList from './students-list';
import { dayScheduleStore } from '../store/day-schedule-store';
import { NavHistoryContext } from '../../../procceses/nav-history';

const Students = () => {

    const {back} = useContext(NavHistoryContext)

    return (
        <div className='schedule-day__students'>
            <div className='schedule-day__up-info'>
                <TitleUi
                    title='Посещаемость'
                />
                <div className='schedule-day__close-btn' onClick={() => window.history.back()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 10.5858L7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289C5.90237 6.68341 5.90237 7.31658 6.29289 7.7071L10.5858 12L6.2929 16.2929C5.90237 16.6834 5.90237 17.3166 6.2929 17.7071C6.68342 18.0976 7.31659 18.0976 7.70711 17.7071L12 13.4142L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L13.4142 12L17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L12 10.5858Z" fill="white" />
                    </svg>
                </div>
            </div>
            <StudentsList
                schedule={dayScheduleStore}
            />
        </div>
    );
};

export default Students;