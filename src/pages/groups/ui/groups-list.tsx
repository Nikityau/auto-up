import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { useFetchGroups } from "../helpers/hooks/use-fetch-groups";
import GroupCard from "../../../enteties/group-card";
import { LoaderStore } from "../../../local-store/loader/loader-store";
import { CookieStore } from "../../../local-store/cookie/cookie-store";

type Props = {
  loader: LoaderStore,
  cookie: CookieStore
}

const GroupsList = observer(({ loader, cookie }: Props) => {

  const groups = useFetchGroups(loader, cookie);

  return (
    <div className="groups-list">
      {
        groups?.map(g => (
          <Link
            to={
              `${g.id}`
            }
            key={g.id}
          >
            <GroupCard
              id={g.id}
              groupTitle={g.groupTitle}
              courseTitle={g.courseTitle}
              students={g.students}
              status={g.status}
            />
          </Link>
        ))
      }
    </div>
  );
});

export default GroupsList;