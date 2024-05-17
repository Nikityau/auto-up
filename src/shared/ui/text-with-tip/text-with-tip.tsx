import React, {FC} from 'react';

import './index.scss'
import {is} from "immer/dist/utils/common";

type Props = {
    text: string,
    tip: string
}

const TextWithTip: FC<Props> = (
    {
        text,
        tip
    }) => {

    const [isHovered, setHovered] = React.useState<boolean>(false);

    return (
        <div className={'text-with-tip'}
             onMouseEnter={() => setHovered(true)}
             onMouseLeave={() => setHovered(false)}
        >
            {text}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1.5" width="15" height="15" rx="7.5" stroke="#9E9E9E" strokeWidth="1.5"/>
                <path d="M9.375 12.75L9.375 8.25" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M7.875 8.25L9.375 8.25" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M9.375 6L9.375 5.25" stroke="#9E9E9E" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
            </svg>

            {
                isHovered &&
                <div className={'text-with-tip__tip'}>
                    { tip }
                </div>
            }
        </div>
    );
};

export default TextWithTip;