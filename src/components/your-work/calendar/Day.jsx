import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import GlobalContext from "./context/GlobalContext";

const Day = ({ day, rowIdx }) => {
  function getCurrentDayClass() {
    return day.format("DD--MM--YY") === dayjs().format("DD--MM--YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }
  function renameLbl(lbl) {
    if (lbl === "Low") {
      return "#22C55E";
    } else if (lbl === "High") {
      return "#EF4444";
    } else {
      return "#F97316";
    }
  }
  const {
    setDaySelected,
    setShowEventModal,
    savedEvents,
    setSelectedEvent,
    filteredEvents,
  } = useContext(GlobalContext);
  const [dayEvents, setDayEvents] = useState([]);
  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) =>
        dayjs(evt.startTime).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [day, filteredEvents]);
  const taskList = useSelector((state) => state.data.taskList);
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer "
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            className={` p-1 mr-3 ml-3 text-gray-600 text-sm rounded mb-1 truncate `}
            style={{ backgroundColor: renameLbl(evt.priority) }}
            onClick={() => {
              setSelectedEvent(evt);
            }}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;
