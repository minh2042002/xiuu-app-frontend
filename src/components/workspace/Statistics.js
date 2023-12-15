import React from "react";
import MultiColorProgressBar from "../progress-bar/index";
const Statistics = ({ workspace, userList }) => {
  const readings = [
    {
      name: "Done",
      value: 16,
      color: "green",
    },
    {
      name: "In process",
      value: 70,
      color: "#EFCD1A",
    },
    {
      name: "Late",
      value: 14,
      color: "red",
    },
  ];
  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {workspace.user.map((workspaceUser) => (
        <div style={{marginRight: '10%', marginBottom: '20px',width:"150px"}}>
          <MultiColorProgressBar  key={workspaceUser.id} readings={readings} workspaceUser={workspaceUser} userList={userList} />
        </div>
      ))}
    </div>
  );
};

export default Statistics;
