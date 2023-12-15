import React from "react";
import "./style.scss";
import { Row, Col, Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const MultiColorProgressBar = ({ readings, workspaceUser, userList }) => {
  const getUserWithID = (userId) => {
    const user = userList.find((user) => user.id === userId);
    return user;
  };
  const values = readings.map((item, i) => {
    if (item.value > 0) {
      return (
        <div
          className="value"
          style={{ color: item.color, width: `${item.value}%` }}
          key={i}
        >
          <span>{item.value}%</span>
        </div>
      );
    }
    return null;
  });

  const bars = readings.map((item, i) => {
    if (item.value > 0) {
      return (
        <div
          className="bar"
          style={{ backgroundColor: item.color, width: `${item.value}%` }}
          key={i}
        ></div>
      );
    }
    return null;
  });

  return (
    <div className="card" style={{ padding: "10px 20px 10px 20px", fontFamily: "Roboto" }}>
      <Row style={{marginBottom: '10px'}}>
        <Space size={12}>
          <Avatar size="medium" src={getUserWithID(workspaceUser.id).avatar} />
          <Row style={{display: 'flex', flexDirection: 'column'}}>
            <span style={{ fontSize: "14px", fontWeight: "700" }}>
              {getUserWithID(workspaceUser.id).name}
            </span>
            <span style={{ fontSize: "10px", fontWeight: "300" }}>
              {workspaceUser.role}
            </span>
          </Row>
        </Space>
      </Row>
      <Row style={{ display: "flex", justifyContent: "space-between", paddingBottom: '15px' }}>
        <div className="task-count">
          <strong>8</strong>
          <div style={{ fontSize: "10px" }}>To do</div>
        </div>
        <div className="task-count">
          <strong>16</strong>
          <div style={{ fontSize: "10px" }}>Done</div>
        </div>
      </Row>
      <Row style={{ display: "flex", flexDirection: "column", paddingBottom: '10px' }}>
        <Space size={8}>
          <span className="dot" style={{ color: "green" }}>
            ●
          </span>
          <span>Done</span>
        </Space>
        <Space size={8}>
          <span className="dot" style={{ color: "#EFCD1A" }}>
            ●
          </span>
          <span>In process</span>
        </Space>
        <Space size={8}>
          <span className="dot" style={{ color: "red" }}>
            ●
          </span>
          <span>Late</span>
        </Space>
      </Row>
      <Row className="bar-row" style={{marginBottom: '5px'}}>
        <div className="multicolor-bar">
          <div className="bars">{bars}</div>
          <div className="values">{values}</div>
        </div>
      </Row>
      <Row>
        <div className="complete-rate">
            <strong style={{fontSize: '14px'}}>16%</strong>
            <span style={{fontSize: '10px'}}>Completion rate</span>
        </div>
      </Row>
    </div>
  );
};

export default MultiColorProgressBar;
