import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

import {TestStore} from "../../store/test-store";

export const useTasksWatcher = (testStore: TestStore) => {
    const nav = useNavigate()

    useEffect(() => {
        if(testStore.isEnd) {
            nav(`finished`)
        }
    }, [testStore.isEnd])

    useEffect(() => {
        testStore.setTest()

        return () => {
            testStore.dispose()
        }
    }, [])
}