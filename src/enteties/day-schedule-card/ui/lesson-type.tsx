import React from "react";
import cn from "classnames";

type Props = {
  type: 'online' | 'offline'
}

const LessonType = ({type}:Props) => {
  return (
    <div className={cn(
      'day-schedule-card__lesson-type',
        `day-schedule-card__lesson-type_${type}`
    )}>
      <span>
        {
          type == 'online'
            ? 'Онлайн'
            : 'Очно'
        }
      </span>
    </div>
  );
};

export default LessonType;