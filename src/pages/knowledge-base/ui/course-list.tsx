import {nanoid} from "nanoid";
import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useFetchCourses } from "../helpers/hooks/use-fetch-course";
import CourseDocCard from "../../../enteties/course-doc-card";
import { LoaderStore } from "../../../local-store/loader/loader-store";
import {ErrorStore} from "../../../local-store/error-store";

import img from "../assets/p1.png";

type Props = {
  loader: LoaderStore,
  error: ErrorStore
}

const CourseList = observer(({loader, error}: Props) => {

  const courses = useFetchCourses(loader, error);

  return (
    <div className="knowledge-base-page__course-list">
      {
        courses?.map(c => (
          <Link
            to={`${c.id}`}
            key={nanoid()}
          >
            <CourseDocCard
              id={c.id}
              preview={img}
              title={c.title}
            />
          </Link>
        ))
      }
    </div>
  );
});

export default CourseList;