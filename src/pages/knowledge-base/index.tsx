import React from 'react';
import PageTitle from '../../shared/ui/page-title';
import CourseList from './ui/course-list';

import './style/index.scss'

const KnowledgeBase = () => {
    return (
        <div className='knowledge-base-page'>
            <div className='knowledge-base-card__container app-container'>
                <PageTitle
                    title='Курс'
                />
                <CourseList/>
            </div>
        </div>
    );
};

export default KnowledgeBase;