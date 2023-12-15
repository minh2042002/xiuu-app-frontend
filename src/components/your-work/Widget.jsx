import React from "react";
import {
  ScheduleOutlined,
  FileDoneOutlined,
  EditOutlined,
  DeleteOutlined,
  StopOutlined,
} from "@ant-design/icons";
import "./widget.scss";
const Widget = ({ type }) => {
  let data;
  const amout = 100;
  const diff = 20;
  switch (type) {
    case "scheduled":
      data = {
        title: "Scheduled",
        numberTask: 35,
        icon: (
          <ScheduleOutlined
            className="icon"
            style={{
              color: "#2148C0",
            }}
          />
        ),
      };
      break;
    case "done":
      data = {
        title: "Done",
        numberTask: 40,
        icon: (
          <FileDoneOutlined
            className="icon"
            style={{
              color: "#08D604",
            }}
          />
        ),
      };
      break;
    case "processing":
      data = {
        title: "Processing",
        numberTask: 18,
        icon: (
          <EditOutlined
            className="icon"
            style={{
              color: "#EFCD1A",
            }}
          />
        ),
      };
      break;
    case "canceled":
      data = {
        title: "Canceled",
        numberTask: 7,
        icon: (
          <DeleteOutlined
            className="icon"
            style={{
              color: "#DE0404",
            }}
          />
        ),
      };
      break;
    case "missed":
      data = {
        title: "Missed",
        numberTask: 0,
        icon: (
          <StopOutlined
            className="icon"
            style={{
              color: "#737373",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span>{data.icon}</span>
      </div>
      <div className="right">
        <span className="counter">{data.numberTask}</span>
        <span className="title">{data.title}</span>
      </div>
    </div>
  );
};

export default Widget;
