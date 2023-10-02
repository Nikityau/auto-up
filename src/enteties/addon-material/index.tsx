import React from 'react';
import { AddonFile } from '../../pages/schedule-day/store/interface.ts';

import './style/index.scss'

type Props = {
    addon: AddonFile[]
}

const AddonMaterial = ({ addon }: Props) => {
    return (
        <div className='addon-material'>
            <div className='addon-material__title'>
                <span>Дополнительные материалы</span>
            </div>
            {
                addon.map(m => (
                    <div className='addon-material__material'
                        key={m.id}
                    >
                        <a href={m.url}>
                            <span>{m.title}</span>
                        </a>
                    </div>
                ))
            }
        </div>
    );
};

export default AddonMaterial;