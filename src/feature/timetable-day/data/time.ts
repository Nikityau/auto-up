import { nanoid } from "nanoid";

interface DayTime {
  id: string,
  time: string
}


export const dayTime: DayTime[] = [];

const fillDayTime = () => {
  for (let i = 8; i <= 22; ++i) {
    const time = i < 10 ? `0${i}:00` : `${i}:00`;

    dayTime.push({
      id: nanoid(),
      time
    });
  }
};
fillDayTime();