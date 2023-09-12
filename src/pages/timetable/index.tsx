import React from 'react';
import { Outlet } from 'react-router-dom';
import TimetableTitle from './ui/title';
import Filters from './ui/filters';

import TimetableProvider from './provider/timetable-provider';
import { lecturerTimetable } from '../../local-store/timetable/timtetable-store';

import './style/index.scss'

const Timetable = () => {
    return (
        <div className='timetable-page'>
            <div className='timetable-page__container app-container'>
                <TimetableTitle/>
                <div className='timetable-page__tt-zone'>
                    <Filters/>
                    <TimetableProvider
                        timetable={lecturerTimetable}
                    />
                </div>
            </div>
        </div>
    );
};

export default Timetable;
