import React from 'react';
import cn from 'classnames'

import folder_img from '../../assets/folders.png'

type Props = {
    classNames?: string[]
}

const FoldersIcon = ({classNames}:Props) => {
    return (
        <div className={cn(
            'folders-icon',
            classNames
        )}>
            <img src={folder_img} alt={'folders'}/>
        </div>
    );
};

export default FoldersIcon;