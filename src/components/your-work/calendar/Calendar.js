import React, { useState, useContext, useEffect } from "react";
import Month from "./Month";
import SideBar from "./SideBar";
import CalendarHeader from "./CalenderHeader";
import { getMonth } from "./util";
import GlobalContext from "./context/GlobalContext";
import { EventModal } from "./EventModal";
const Calendar = (props) => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <>
      {showEventModal && <EventModal />}

      <div className="h-full w-full flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1 w-5/5">
          <SideBar />
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
};

export default Calendar;
