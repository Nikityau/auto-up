import axios from "axios";
import { IDoc, Lesson, ResDoc } from "../hooks/interface";
import { baseUrl } from "../../../../shared/api/base-url";
import { nanoid } from "nanoid";

export const adapterDoc = async (doc: ResDoc, token: string) => {
  const doc_adapted: IDoc = {
    id: doc.id,
    title: doc.title,
    modules: []
  };

  for (let module of doc.modules) {
    const lessons_adapted: Lesson[] = [];

    for (let lesson of module.lessons) {
      const {data} = await axios.get(`${baseUrl}/api/v1/courses/${doc.id}/lessons/${lesson.id}/tasks/`, {
        headers: {
          Authorization: `Token ${token}`
        }
      });

      lessons_adapted.push({
        id: lesson.id,
        title: lesson.title,
        tasks: data,
        addonMaterial: [
          {
            id: nanoid(),
            manual: lesson.manual,
            presentation: lesson["presentation"]
          }
        ]
      });
    }

    doc_adapted.modules.push({
      id: module.id,
      title: module.title,
      lessons: lessons_adapted
    });
  }

  return doc_adapted
};