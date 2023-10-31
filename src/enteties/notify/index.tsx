import React from 'react'
import { FType } from '../../shared/helpers/types/f-types'

export type Notification = {
    id?: string
    title: string,
    description: string,
    type: 'error' | 'success'
}

type Props = {
    onClose: FType<Notification, void>
} & Notification
// dodel

const Notify = ({description,id,title, type,onClose}: Props) => {
    return (
        <div className='notify'>
            <div className='notify__title'>
                <span>{title}</span>
                <div>
                
                </div>
            </div>
        </div>
    )
}

export default Notify