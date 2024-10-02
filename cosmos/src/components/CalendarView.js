import React from "react";
import Calendar from "react-calendar"; // Ensure you have react-calendar installed
import 'react-calendar/dist/Calendar.css';

const CalendarView = () => {
  const [date, setDate] = React.useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div>
      <h2>Calendar</h2>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default CalendarView;
