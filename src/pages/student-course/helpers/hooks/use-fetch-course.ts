import {useEffect} from "react";
import {CourseStore} from "../../store/course-store";
import {algModule, tdModule, tDTasks} from "../../data/course";

export const useFetchCourse = (courseStore: CourseStore) => {

    useEffect(() => {
        if(courseStore.currentModule.id == tdModule.id) {
            courseStore.setLessons(tdModule.lessons)

            return
        }
        if(courseStore.currentModule.id == algModule.id) {
            courseStore.setLessons(algModule.lessons)

            return
        }

        courseStore.setLessons(null)

    }, [courseStore.currentModule])

    useEffect(() => {
        if(courseStore?.currentLesson?.id == tDTasks.id) {
            courseStore.setTasks(tDTasks.tasks)

            return
        }

        courseStore.setTasks(null)
    }, [courseStore.currentLesson])
}