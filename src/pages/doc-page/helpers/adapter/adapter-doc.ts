import axios from "axios";
import {DocModule, IDoc, Lesson, ResDoc} from "../hooks/interface";
import {nanoid} from "nanoid";

import {baseUrl} from "../../../../shared/api/base-url";

export const adapterDoc = async (doc: ResDoc, token: string) => {
    const doc_adapted: IDoc = {
        id: doc.id,
        title: doc.title,
        modules: []
    };

    for (let module of doc.modules) {
        const md: DocModule = {
            id: module.id,
            title: module.title,
            lessons: []
        }

        for (let lesson of module.lessons) {
            const ls: Lesson = {
                id: lesson.id,
                title: lesson.title,
                addonMaterial: [
                    {
                        id: nanoid(),
                        presentation: lesson['presentation'],
                        manual: lesson.manual
                    }
                ],
                tasks: []
            }
            for (let task of lesson.task_blocks) {
                const taskRes = await axios.get(`${baseUrl}/api/v1/courses/${doc.id}/lessons/${ls.id}/tasks/?task_block=${task.id}`, {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                })

                ls.tasks.push({
                    id:nanoid(),
                    title: task.name,
                    tasks: taskRes.data
                })
            }
            md.lessons.push(ls)
        }

        doc_adapted.modules.push(md)
    }

    return doc_adapted
};