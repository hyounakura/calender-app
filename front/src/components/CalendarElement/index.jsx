import React from "react";
import dayjs from "dayjs";
import * as styles from "./style.css";
import { isSameMonth, isFirstDay, isSameDay, getMonth } from "../../services/calendar";
import Schedule from "../Schedule";
import { Typography } from "@material-ui/core";

const CalendarElement = ({ day, month, schedules }) => {
  const format = isFirstDay(day) ? "M月D日" : "D";
  const today = dayjs();
  const isToday = isSameDay(day, today);
  const currentMonth = getMonth(month);
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
      <div className={styles.schedules}>
        {schedules.map(e => (
          <Schedule key={e.id} schedule={e} />
        ))}
      </div>
    </div>
  );
};

export default CalendarElement;
