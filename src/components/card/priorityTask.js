import React from "react";
import cardStyle from "./style";

const TaskItemPriorityBadge = ({ priorityTask }) => {
  const classes = cardStyle();
  const renderClassesAccordingToPrority = () => {
    if (priorityTask === 'High') {
      return classes.High
    } else if (priorityTask === 'Medium') {
      return classes.Medium
    } else if (priorityTask === 'Low') {
      return classes.Low
    }
  };

  return <span className={renderClassesAccordingToPrority()}>{priorityTask}</span>;
};

export default TaskItemPriorityBadge;
