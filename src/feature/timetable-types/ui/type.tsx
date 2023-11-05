import React from 'react';
import cn from 'classnames'
import { observer } from 'mobx-react-lite';
import { TimetableStore, TimetableType } from '../../../local-store/timetable/timtetable-store';
import {Timetable} from "../../../local-store/timetable/timetable";

type Props = {
    timetable: Timetable
    type: TimetableType,
    text: string,
}

const Type = observer(({ text, type, timetable }: Props) => {

    const onClick = () => {
        timetable.changeType(type)
    }

    const getClassBtType = () => {
       if(timetable.type == 'month' || timetable.type == 'day') {
            if(type == 'day') {
                return 'timetable-types__type_border_r'
            }
            if(type == 'month') {
                return 'timetable-types__type_border_l'
            }
       }
       if(timetable.type == 'week') {
            if(type == 'week') {
                return 'timetable-types__type_border_b'
            }
       }

       return ""
    }

    return (
        <div className={cn(
            'timetable-types__type',
            timetable.type == type 
            ? `timetable-types__type_current` : '',
            getClassBtType()
           
        )} onClick={onClick}>
            <span>{text}</span>
        </div>
    );
});

export default Type;