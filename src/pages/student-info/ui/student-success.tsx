import React from 'react';
import PageTitle from '../../../shared/ui/page-title';
import Filter from './filter';
import SuccessSideBar from './succes-side-bar';
import SuccessList from './success-list';

const StudentSuccess = () => {
    return (
        <div className='student-success'>
            <PageTitle title='Успехи'/>
            <div className='student-success__container'>
                <SuccessSideBar/>
                <SuccessList/>
                <Filter/>
            </div>
        </div>
    );
};

export default StudentSuccess;