import React from 'react';
import ModuleFilterList from '../../../feature/module-filter-list';
import InfoBlock from '../../../enteties/info-block';
import TaskInfo from '../../../enteties/task-info';

const SuccessSideBar = () => {
    return (
        <div className='success-side-bar'>
            <ModuleFilterList
                course='python start'
                modules={[
                    'Модуль 1. Типы данных',
                    'Модуль 2. Типы данных',
                    'Модуль 3. Типы данных',
                    'Модуль 4. Типы данных',
                ]}
            />
            <InfoBlock
                title={
                    <span>
                        Информация
                    </span>
                }
                classNames={[
                    'tasks-info'
                ]}
            >
                <TaskInfo/>
            </InfoBlock>
        </div>
    );
};

export default SuccessSideBar;