import React from 'react';
import cn from 'classnames'

import './style/index.scss'

export type TaskSquareProps = {
    id?: string 
    type: 'empty' | 'check' | 'right' | 'not_right' | 'not_solve',
    number?: number,
    isSpec?: boolean,
    text?: string
}

const TaskSquare = ({ isSpec = false, text, number, type }: TaskSquareProps) => {
    return (
        <div className={cn(
            'task-square',
            `task-square_status_${type}`
        )}>
            <div className='task-sqaure__sq'>
                {
                    isSpec
                        ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                            <path d="M10.6144 9.3335L10.248 9.17298L10.6144 9.3335L12.5271 4.96817C12.7229 4.52115 13.3571 4.52115 13.5529 4.96817L15.4656 9.3335L15.832 9.17298L15.4656 9.3335C15.6629 9.78382 16.0879 10.0926 16.5771 10.1411L21.3199 10.6112C21.8055 10.6593 22.0015 11.2624 21.6369 11.5868L18.0762 14.7548C17.7089 15.0816 17.5466 15.5812 17.6517 16.0615L18.6702 20.7174C18.7745 21.1942 18.2614 21.5669 17.8402 21.3204L13.727 18.913L13.5249 19.2582L13.727 18.913C13.3027 18.6646 12.7773 18.6646 12.353 18.913L8.23977 21.3204C7.81857 21.5669 7.30555 21.1942 7.40984 20.7174L8.42834 16.0615C8.53341 15.5812 8.37108 15.0816 8.00378 14.7548L4.44314 11.5868C4.07852 11.2624 4.27448 10.6593 4.76014 10.6112L9.50287 10.1411C9.99212 10.0926 10.4171 9.78382 10.6144 9.3335Z"/>
                        </svg>
                        :
                        <span>{number}</span>
                }
            </div>
            {
                text &&
                <div className='task-square__text'>
                    <span>{text}</span>
                </div>
            }
        </div>
    );
};

export default TaskSquare;