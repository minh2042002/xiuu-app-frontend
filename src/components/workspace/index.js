import React, { useState } from "react";
import { Tabs, Space } from "antd";
import useStyleWorkspace from "./style";
import List from "./List";
import Board from "./Board";
import Document from "./Document";
import Statistics from "./Statistics";

const Workspace = ({ workspace, taskList, userList }) => {
  const [tab, setTab] = useState("list");
  const classes = useStyleWorkspace();
  const tabItems = [
    { label: "List", key: "list" },
    { label: "Board", key: "board" },
    { label: "Document", key: "document" },
    { label: "Statistics", key: "statistics" },
  ];

  const handleOnChange = (value) => {
    setTab(value);
  };

  return (
    <div className={classes.workspace}>
      <div className={classes.sidebar}>
        <div className={classes.workspaceName}>
          <Space>
            <img
              alt=""
              width={20}
              height={20}
              style={{ backgroundColor: "lightblue" }}
              src={workspace.avatar}
            />
            <span>{workspace.name}</span>
          </Space>
        </div>
        <Tabs
          tabBarStyle={{ width: "180px", marginLeft: "30px" }}
          tabPosition="left"
          items={tabItems}
          onChange={handleOnChange}
        />
      </div>
      <div className={classes.content}>
        {tab === "list" && <List workspace={workspace} taskList = {taskList} userList={userList} />}
        {tab === "board" && <Board workspace={workspace} taskList={taskList} userList={userList} />}
        {tab === "document" && <Document workspace={workspace} />}
        {tab === "statistics" && <Statistics workspace={workspace} userList={userList} />}
      </div>
    </div>
  );
};

export default Workspace;
