import React from 'react';
import { Link } from 'react-router-dom';

import { useFecthGroups } from '../helpers/hooks/use-fetch-groups';
import { AppRoutes } from '../../../shared/app-routes';
import GroupCard from '../../../enteties/group-card';

const GroupsList = () => {

    const groups = useFecthGroups()

    return (
        <div className='groups-list'>
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
};

export default GroupsList;