import React from "react";
import { observer } from "mobx-react-lite";
import { TimetableStore } from "../../../local-store/timetable/timtetable-store";
import InfoBlock from "../../../enteties/info-block";
import TaskSquare from "../../../enteties/task-square";

type Props = {
  timetableStore: TimetableStore
}

const InfoProvider = observer(({timetableStore}:Props) => {


  if(timetableStore.type == 'month') {
    return (
      <InfoBlock
        title={
          <span className={'type-lessons__title'}>
            Информация
          </span>
        }
        classNames={[
          'type-lessons'
        ]}
      >
        <div className={'type-lessons__container'}>
            <TaskSquare
              type={'right'}
              text={'Очно'}
            />
          <TaskSquare
            type={'not_solve'}
            text={'Онлайн'}
          />
        </div>
      </InfoBlock>
    )
  }

  return (
    <>

    </>
  );
});

export default InfoProvider;