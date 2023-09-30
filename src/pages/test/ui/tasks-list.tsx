import React from 'react';
import {observer} from "mobx-react-lite";
import {TestStore} from "../store/test-store";
import TaskNum from "./task-num";

type Props = {
    testStore: TestStore
}

const TasksList = observer(({testStore}:Props) => {
    return (
        <div className={'test-page__tasks-list'}>
            {
                testStore.tasks.map((t, i) => (
                    <TaskNum
                        key={t.id}
                        number={i + 1}
                        isCurrent={t.id == testStore.currentTask.id}
                        onClick={() => {
                            testStore.setTaskById(t.id )
                        }}
                    />
                ))
            }
        </div>
    );
});

export default TasksList;