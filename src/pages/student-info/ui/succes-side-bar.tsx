import React, { useContext } from "react";
import ModuleFilterList from '../../../feature/module-filter-list';
import InfoBlock from '../../../enteties/info-block';
import TaskInfo from '../../../enteties/task-info';
import { StudentInfoContext } from "../provider";

const SuccessSideBar = () => {

    const {user, module, success} = useContext(StudentInfoContext)

    return (
        <div className='success-side-bar'>
            <ModuleFilterList
                course={user?.course}
                modules={module}
                onChange={(value) => {
                  //success.onChangeModule(value)
                }}
            />
            <InfoBlock
                isOpen={true}
                title={
                    <span>
                        Информация
                    </span>
                }
                classNames={[
                    'tasks-info'
                ]}
            >
                <TaskInfo />
            </InfoBlock>
        </div>
    );
};

export default SuccessSideBar;