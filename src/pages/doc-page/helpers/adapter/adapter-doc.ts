import axios from "axios";
import {nanoid} from "nanoid";

import {DocModule, IDoc, Lesson, ResDoc} from "../hooks/interface";

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
            number: module.number,
            lessons: []
        }

        for (let lesson of module.lessons) {
            const ls: Lesson = {
                id: lesson.id,
                title: lesson.title,
                number: lesson.number,
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

        md.lessons = md.lessons.sort((l1, l2) => l1.number - l2.number)
        
        doc_adapted.modules.push(md)
    }

    doc_adapted.modules = doc_adapted.modules.sort((a, b) => {
        return  a.number - b.number
    })

    return doc_adapted
};