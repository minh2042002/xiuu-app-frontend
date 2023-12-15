import React, { useEffect, useState } from "react";
import { Menu, Dropdown, Row, Col } from "antd";
import useStyleDashboard from "./style";
import AntDesignOutlined from "@ant-design/icons/AntDesignOutlined";
import YourWork from "../your-work";
import Workspace from "../workspace";
import Teams from "../teams";
import * as api from "../../api/index";
import { useDispatch, useSelector } from "react-redux";
import {
  initTaskList,
  initWorkspaceList,
  initUserList,
} from "../../redux/data/reducer";
import { DownOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { USER_LIST } from "../../sample-data";
import { ProfileDropdown } from "../profile/ProfileDropdown";
const Dashboard = (props) => {
  const [tab, setTab] = useState("yourWork");
  const [workspaceTab, setWorkspaceTab] = useState(null);
  const classes = useStyleDashboard();
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.data.taskList);
  const workspaceList = useSelector((state) => state.data.workspaceList);
  const userList = useSelector((state) => state.data.userList);
  const tabItems = [
    { label: "Your work", key: "yourWork" },
    { label: "Workspace", key: "workspace", dropdown: true },
    { label: "Teams", key: "teams" },
  ];

  const handleOnChange = (value) => {
    setTab(value.key);
    setWorkspaceTab(null);
  };

  const handleDropdownChange = (value) => {
    setTab("workspace");
    setWorkspaceTab(value.key);
  };

  const getWorkspace = () => {
    const selectedWorkspace = workspaceList.find(
      (workspace) => workspace.id === workspaceTab
    );
    return selectedWorkspace ? selectedWorkspace : null;
  };

  const getData = () => {
    const taskList = api.getTaskList();
    const workspaceList = api.getWorkspaceList();
    const userList = api.getUserList();
    dispatch(initTaskList(taskList));
    dispatch(initWorkspaceList(workspaceList));
    dispatch(initUserList(userList));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className={classes.head}>
        <div className={classes.logo}>
          <AntDesignOutlined />
          <span style={{ marginLeft: "5px" }}> Xiuu </span>
        </div>

        <Menu selectedKeys={[tab]} mode="horizontal" style={{ width: "50%" }}>
          {tabItems.map((item) =>
            item.dropdown ? (
              <Menu.Item key={item.key}>
                <Dropdown
                  key={item.key}
                  overlay={
                    <Menu>
                      {workspaceList.map((workspace) => (
                        <Menu.Item
                          key={workspace.id}
                          onClick={handleDropdownChange}
                        >
                          <Row
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Col style={{ marginRight: "15px" }}>
                              {" "}
                              <img
                                style={{
                                  width: "20px",
                                  height: "20px",
                                  marginRight: "5px",
                                }}
                                src={workspace.avatar}
                                alt=""
                              />{" "}
                            </Col>
                            <Col>
                              <Row>
                                <span>{workspace.name}</span>
                              </Row>
                              <Row>
                                <span>{workspace.description}</span>
                              </Row>
                            </Col>
                          </Row>
                        </Menu.Item>
                      ))}
                      <hr style={{ width: "90%" }} />
                      <Menu.Item key="create-workspace">
                        <span>Create Workspace</span>
                      </Menu.Item>
                    </Menu>
                  }
                  placement="bottomLeft"
                  trigger={["click"]}
                >
                  <div>{item.label} <DownOutlined style={{ fontSize: "10px" }} /></div>
                </Dropdown>
              </Menu.Item>
            ) : (
              <Menu.Item onClick={handleOnChange} key={item.key}>
                {item.label}
              </Menu.Item>
            )
          )}
        </Menu>
        <div style={{ marginLeft: "30%" }}>
          <ProfileDropdown />
        </div>
      </div>
      <div className={classes.tab}>
        {tab === "yourWork" && <YourWork />}
        {tab === "workspace" && workspaceTab !== null && (
          <Workspace
            workspace={getWorkspace()}
            taskList={taskList}
            userList={userList}
          />
        )}
        {tab === "teams" && <Teams />}
      </div>
    </div>
  );
};

export default Dashboard;
