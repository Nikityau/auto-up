import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useFetchCourses } from "../helpers/hooks/use-fetch-course";
import CourseDocCard from "../../../enteties/course-doc-card";
import { CookieStore } from "../../../local-store/cookie/cookie-store";
import { LoaderStore } from "../../../local-store/loader/loader-store";

import img from "../assets/p1.png";

type Props = {
  cookieStore: CookieStore
  loader: LoaderStore
}

const CourseList = observer(({ cookieStore, loader }: Props) => {

  const courses = useFetchCourses(cookieStore, loader);

  return (
    <div className="knowledge-base-page__course-list">
      {
        courses?.map(c => (
          <Link
            to={`${c.id}`}
            key={c.id}
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