import React from 'react'
import cn from 'classnames'
import { FType } from '../../shared/helpers/types/f-types'
import { useToggle } from '../../shared/helpers/hooks/use-toggle'

import './style/index.scss'

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

const Notify = ({ description, id, title, type, onClose }: Props) => {

    const [is, {on}] = useToggle(false)

    const onDisappear = () => {
        on()
        setTimeout(() => {
            onClose({ id, description, title, type })
        }, 400)
    }

    return (
        <div className={cn(
            'notify',
            `notify_status_${type}`,
            is && 'notify_disappear'
        )}>
            <div className={'notify__title'}>
                <span>{title}</span>
                <div className={'notify__close'} onClick={() => onDisappear()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M16 7.5L12 12.5M12 12.5L16 17.5M12 12.5L8 7.5M12 12.5L8 17.5" stroke="#191617" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className={'notify__description'}>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Notify