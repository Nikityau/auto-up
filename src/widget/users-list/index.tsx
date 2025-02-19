import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";

import {TUserDownLine, TUserFilter} from "../../entities/user-down-line/index.type";
import UserDownLine from "../../entities/user-down-line";
import UserFilter from "../../features/user-filter";
import {usersListData} from "./data";

import './index.scss'

const UsersList = () => {

    const [users, setUsers] = React.useState<Array<TUserDownLine>>(usersListData);
    const [userStat, setUserStat] = useState<TUserFilter>('all')

    const loc = useLocation();

    const usersFiltered = users.filter(u => {
        if (userStat === 'active') {
            return u.isActive
        }

        return u
    })

    return (
        <div className={'users-list'}>
            <div className={'users-list__header'}>
                <span>Пользователи</span>
                {
                    !loc.pathname.includes('users') &&
                    <Link to={'/auto-up/inside/users'}>
                        <svg width="34" height="16" viewBox="0 0 34 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM33.7071 8.70711C34.0976 8.31658 34.0976 7.68342 33.7071 7.29289L27.3431 0.928932C26.9526 0.538408 26.3195 0.538408 25.9289 0.928932C25.5384 1.31946 25.5384 1.95262 25.9289 2.34315L31.5858 8L25.9289 13.6569C25.5384 14.0474 25.5384 14.6805 25.9289 15.0711C26.3195 15.4616 26.9526 15.4616 27.3431 15.0711L33.7071 8.70711ZM1 9H33V7H1V9Z"
                                fill="#050505"/>
                        </svg>
                    </Link>
                }
            </div>
            <div className={'users-list__filter'}>
                <span>Всего пользователей: <b>{users?.length || 0}</b></span>
                <UserFilter
                    active={userStat}
                    onClick={setUserStat}
                />
            </div>
            <div className={'users-list__list'}>
                {
                    usersFiltered.map(u => (
                        <Link
                            to={`/auto-up/inside/users/${u.id}`}
                            key={u.id}
                        >
                            <UserDownLine
                                id={u.id}
                                isActive={u.isActive}
                                name={u.name}
                                traffic={u.traffic}
                                memory={u.memory}
                            />
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default UsersList;