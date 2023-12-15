import React from "react";
import "./recent.scss";
import anh from "./today_task.png";
import anh1 from "./today_event.png";
import { ClockCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const Recent = ({ setTab }) => {
  const taskList = useSelector((state) => state.data.taskList);
  const today = new Date();
  const ahi = dayjs()
  const tomorrow = ahi.add(1, 'day')
  const tomorrowFormatted = tomorrow.format('YYYY-MM-DD')
  console.log(tomorrowFormatted);
  const dayCompare = `${today.toLocaleString("en-us", {
    weekday: "short",
  })} ${today.toLocaleString("en-us", {
    month: "short",
  })} ${today.getDate()} ${today.getFullYear()}`;
  var count = 0;
  return (
    <div className="container">
      <div className="parent1">
        <div className="today">
          <p>Today's tasks</p>

          {taskList.map((task) => {
            if (
              dayjs(task.startTime).format("ddd MMM DD YYYY") === dayCompare
            ) {
              count++;
              return (
                <div className="event_detail">
                  <span className="event_title">{task.title}</span>
                </div>
              );
            } else {
              console.log(dayjs(task.startTime).format("YYYY-MM-DD"));

              return null; // You can return a placeholder element like <p></p> if needed
            }
          })}
         
          {/* {count === 0 && (
            <>
              <img src={anh} className="today_event_img" alt="" />

              <span className="notice">
                Looks like you're free and clear the rest of the day
              </span>
            </>
          )} */}

          <span
            className="view"
            onClick={() => {
              setTab("calendar");
            }}
          >
            View Calendar
          </span>
        </div>
        <div className="today_task">
          <p>Tomorrow's tasks</p>
          {/* <img src={anh1} className="today_task_img" alt="" /> */}
          {taskList.map((task) => {
            if (
              dayjs(task.startTime).format("YYYY-MM-DD")=== tomorrowFormatted
            ) {
              return (
                <div className="task_detail">
                  <span className="task_title">{task.title}</span>
                </div>
              );
            } else {
              console.log(dayjs(task.startTime).format("YYYY-MM-DD"));

              return null; // You can return a placeholder element like <p></p> if needed
            }
          })}

          
          {/* <span className="notice">
            Nothing due today. Be a go-better, and check back soon.
          </span> */}
          <span
            className="view"
            // onClick={() => {
            //   setTab("calendar");
            // }}
          >
            View All
          </span>
        </div>
      </div>
      <div className="parent2">
        <div className="recent_record">
          <p>Recent Records</p>
          <div className="project">
            <ClockCircleOutlined />
            <span className="pj_detail">UIUX Project (UIUX)</span>
          </div>
          <div className="project">
            <ClockCircleOutlined />
            <span className="pj_detail">OOP Project (OOP)</span>
          </div>
          <div className="project">
            <ClockCircleOutlined />
            <span className="pj_detail">ITSS Project (ITSS)</span>
          </div>
          <div className="project">
            <ClockCircleOutlined />
            <span className="pj_detail">Graduation Project (GP)</span>
          </div>
        </div>
        <div className="key_deal">
          <p>Key Deals - Recent Opportunities</p>
          <span className="nodeal">
            No deals yet. Select another filter or check back later.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Recent;
