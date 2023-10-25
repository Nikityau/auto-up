import React from 'react';
import TitleUi from '../../../shared/ui/page-title';
import Filter from './filter';
import SuccessSideBar from './succes-side-bar';
import SuccessList from './success-list';

const StudentSuccess = () => {
    return (
        <div className='student-success'>
            <TitleUi title='Успехи'/>
            <div className='student-success__container'>
                <SuccessSideBar/>
                <SuccessList/>
            </div>
        </div>
    );
};

export default StudentSuccess;