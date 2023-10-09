import React from 'react';
import TitleUi from '../../shared/ui/page-title';
import CourseList from './ui/course-list';
import { cookieStore } from "../../local-store/cookie/cookie-store";
import { loaderStore } from "../../local-store/loader/loader-store";

import './style/index.scss'

const KnowledgeBase = () => {
    return (
        <div className='knowledge-base-page'>
            <div className='knowledge-base-card__container app-container'>
                <TitleUi
                    title='Курс'
                />
                <CourseList
                  cookieStore={cookieStore}
                  loader={loaderStore}
                />
            </div>
        </div>
    );
};

export default KnowledgeBase;