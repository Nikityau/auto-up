import React, {FC} from 'react';

import './index.scss'

type Props = {
    avatar: string;
    name: string;
}

const UserMini: FC<Props> = (
    {
        name,
        avatar
    }) => {
    return (
        <div className="user-mini">
            <div className={'user-mini__avatar'}
                style={{
                    backgroundImage: `url(${avatar})`,
                }}
            >
            </div>
            <span className={'user-mini__name'}>{name}</span>
        </div>
    );
};

export default UserMini;