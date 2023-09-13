import { nanoid } from 'nanoid';
import React from 'react';

type Props = {
    students: string[]
}

const Students = ({ students }: Props) => {
    return (
        <div className='group-card__students'>
            <div className='group-card__remain-circle group-card__circle'>
                <div className='group-card__circle-inner'>
                    <span>+13</span>
                </div>
            </div>
            {
                students.map((el, i) => {
                    if (i >= 4) return null

                    return (
                        <div className='group-card__student group-card__circle'
                            key={nanoid()}
                            style={{
                                transform: `translate(${-12 * (i + 1)}px, 0)`,
                                zIndex: 3 - i
                            }}
                        >
                            <div className='group-card__circle-inner' />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Students;