import React from "react";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";

import {useFetchGroups} from "../helpers/hooks/use-fetch-groups";
import GroupCard from "../../../enteties/group-card";


type Props = {}

const GroupsList = observer(({}: Props) => {

    const groups = useFetchGroups();

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