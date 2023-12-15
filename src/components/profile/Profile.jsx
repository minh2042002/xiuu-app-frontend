import {
  AntDesignOutlined,
  DashOutlined,
  DownOutlined,
  SlackOutlined,
  SlackSquareOutlined,
} from "@ant-design/icons";
import { Col, Dropdown, Menu, Row } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useStyleDashboard from "../dashboard/style";
import Teams from "../teams";
import Workspace from "../workspace";
import YourWork from "../your-work";
import { ProfileDropdown } from "./ProfileDropdown";
import "./profile.scss";
import Avatar from "antd/es/avatar/avatar";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const classes = useStyleDashboard();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const workspaceList = useSelector((state) => state.data.workspaceList);
  const [tab, setTab] = useState("");
  const [workspaceTab, setWorkspaceTab] = useState(null);
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
  return (
    <div>
      <div className={classes.head}>
        <div className={classes.logo} onClick={()=>navigate("/") } style={{cursor:"pointer"}}>
          <AntDesignOutlined />
          <span style={{ marginLeft: "5px" }}> Xiuu </span>
        </div>
        <Menu selectedKeys={[tab]} mode="horizontal" style={{ width: "50%" }}>
          {tabItems.map((item) =>
            item.dropdown ? (
              <Dropdown
                key={item.key}
                overlay={
                  <Menu>
                    {workspaceList.map((workspace) => (
                      <Menu.Item
                        key={workspace.id}
                        onClick={handleDropdownChange}
                      >
                        <Row style={{ display: "flex", alignItems: "center" }}>
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
                <Menu.Item key={item.key}>
                  {item.label} <DownOutlined style={{ fontSize: "10px" }} />
                </Menu.Item>
              </Dropdown>
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
      <div className="body">
        <div className="info">
          <span style={{ fontSize: "25px", fontWeight: "bolder" }}>
            Tuong Mai
          </span>
          <span style={{ fontSize: "18px" }}>
            Last active on Jun 02, 2023.{" "}
          </span>
          <div
            style={{
              border: "2px solid #DAD5D5",
              width: "250px",
              height: "400px",
              borderRadius: "2px",
            }}
          >
            <span className="avatar">
              <Avatar
                src={
                  "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                }
                size={120}
                style={{
                  border: "1px solid gray",
                  backgroundColor: "gray",
                  marginTop: "5px",
                }}
              />
            </span>
            <div style={{ marginTop: "20px", marginBottom: "15px" }}>
              <p
                style={{ fontSize: "16px", color: "gray", marginLeft: "15px" }}
              >
                Full name
              </p>
              <p style={{ fontSize: "17px", marginLeft: "15px" }}>
                Mai Van Tuong
              </p>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <p
                style={{ fontSize: "16px", color: "gray", marginLeft: "15px" }}
              >
                Email address
              </p>
              <p style={{ fontSize: "17px", marginLeft: "15px" }}>
                maivantuong@gmail.com
              </p>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <p
                style={{ fontSize: "16px", color: "gray", marginLeft: "15px" }}
              >
                Public name
              </p>
              <p style={{ fontSize: "17px", marginLeft: "15px" }}>@tuong mai</p>
            </div>
            <buton
              style={{
                fontSize: "19px",
                marginLeft: "20px",
                marginBottom: "30px",
                color: "gray",
                fontWeight: "bolder",
                backgroundColor: "#DAD5D5",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              Suggest changes
            </buton>
          </div>
        </div>
        <div className="product">
          <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
            Products
          </span>
          <p style={{ fontSize: "16px" }}>
            Manage this users’s product roles and grant product access
          </p>
          <div className="pd_detail">
            <div
              style={{ flex: "1", display: "flex", flexDirection: "column" }}
            >
              <p
                style={{
                  fontSize: "16px",
                  color: "gray",
                  borderBottom: "1px solid",
                }}
              >
                Product
              </p>
              <div style={{ display: "flex" }}>
                <span>
                  <SlackOutlined
                    style={{
                      color: "#1D80F5",
                      paddingRight: "5px",
                      backgroundColor: "#DAD5D5",
                      borderRadius: "2px",
                      padding: "6px",
                    }}
                  />
                </span>
                <span style={{ paddingLeft: "8px" }}>
                  <p style={{ color: "#black", fontSize: "16px" }}>
                    Jira Software
                  </p>
                  <p style={{ fontSize: "14px", color: "#AC9F9F" }}>mvtuong</p>
                </span>
              </div>
              <div style={{ display: "flex" }}>
                <span>
                  <SlackOutlined
                    style={{
                      color: "#1D80F5",
                      paddingRight: "5px",
                      backgroundColor: "#DAD5D5",
                      borderRadius: "2px",
                      padding: "6px",
                    }}
                  />
                </span>
                <span style={{ paddingLeft: "8px" }}>
                  <p style={{ color: "#black", fontSize: "16px" }}>
                    Jira Software
                  </p>
                  <p style={{ fontSize: "14px", color: "#AC9F9F" }}>mvtuong</p>
                </span>
              </div>
            </div>
            <div
              style={{
                flex: "0.4",
                display: "flex",
                flexDirection: "column",
                height: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  color: "gray",
                  borderBottom: "1px solid",
                }}
              >
                Last active
              </p>
              <p style={{ fontSize: "16px", marginTop: "5px", padding: "5px" }}>
                Jun 6, 2023
              </p>
              <p style={{ fontSize: "16px", marginTop: "5px", padding: "5px" }}>
                Jun 6, 2023
              </p>
            </div>
            <div
              style={{ flex: "0.5", display: "flex", flexDirection: "column" }}
            >
              <p
                style={{
                  fontSize: "16px",
                  color: "gray",
                  borderBottom: "1px solid",
                }}
              >
                Product roles
              </p>
              <p style={{ fontSize: "16px", marginTop: "5px", padding: "5px" }}>
                User
              </p>
              <p style={{ fontSize: "16px", marginTop: "5px", padding: "5px" }}>
                User
              </p>
            </div>
            <div
              style={{ flex: "0.5", display: "flex", flexDirection: "column" }}
            >
              <span
                style={{
                  fontSize: "16px",
                  color: "gray",
                  borderBottom: "1px solid",
                  width: "50px",
                }}
              >
                More
              </span>
              <span>
                <DashOutlined style={{ marginTop: "10px", padding: "5px" }} />
              </span>

              <span>
                <DashOutlined style={{ marginTop: "10px", padding: "5px" }} />
              </span>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid gray",
              width: "85%",
              paddingBottom: "30px",
            }}
          ></div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontSize: "20px", fontWeight: "bolder" }}>
              Groups
            </span>
            <button
              style={{
                backgroundColor: "#DAD5D5",
                marginRight: "100px",
                padding: "10px",
                borderRadius: "15px",
                fontSize: "18px",
              }}
            >
              Add to groups
            </button>
          </div>
          <p style={{ fontSize: "16px" }}>
            Use groups to manage this user’s permissions, restrictions, and
            producs access.
          </p>
          <div className="gr_detail">
            <div
              style={{ flex: "1", display: "flex", flexDirection: "column" }}
            >
              <p
                style={{
                  fontSize: "16px",
                  color: "gray",
                  borderBottom: "1px solid",
                }}
              >
                Group
              </p>
              <div style={{ display: "flex" }}>
                <span style={{ paddingLeft: "8px" }}>
                  <p
                    style={{
                      color: "#black",
                      fontSize: "16px",
                      color: "#0052CC",
                    }}
                  >
                    group1-of-UIUX-to-design-homepage
                  </p>
                  <p style={{ fontSize: "14px", color: "#AC9F9F" }}>
                    Grants access to Confluence on mvtuong
                  </p>
                </span>
              </div>
              <div style={{ display: "flex" }}>
                <span style={{ paddingLeft: "8px" }}>
                  <p
                    style={{
                      color: "#black",
                      fontSize: "16px",
                      color: "#0052CC",
                    }}
                  >
                    group1-of-UIUX-to-design-homepage
                  </p>
                  <p style={{ fontSize: "14px", color: "#AC9F9F" }}>
                    Grants access to Confluence on mvtuong
                  </p>
                </span>
              </div>
            </div>
            <div
              style={{
                flex: "0.5",
                display: "flex",
                flexDirection: "column",
                height: "10px",
              }}
            >
              <p
                style={{
                  fontSize: "16px",
                  color: "gray",
                  borderBottom: "1px solid",
                }}
              >
                Access to
              </p>
              <p style={{ fontSize: "16px", marginTop: "5px", padding: "5px" }}>
                1 product
              </p>
              <p style={{ fontSize: "16px", marginTop: "5px", padding: "5px" }}>
                1 product
              </p>
            </div>

            <div
              style={{ flex: "0.4", display: "flex", flexDirection: "column" }}
            >
              <span
                style={{
                  fontSize: "16px",
                  color: "gray",
                  borderBottom: "1px solid",
                  width: "50px",
                }}
              >
                More
              </span>
              <span>
                <DashOutlined style={{ marginTop: "10px", padding: "5px" }} />
              </span>

              <span>
                <DashOutlined style={{ marginTop: "10px", padding: "5px" }} />
              </span>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid gray",
              width: "85%",
              paddingBottom: "30px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
