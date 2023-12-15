import React from "react";
import { Button, Space, Row, Col, Dropdown, Menu } from "antd";
import { ReactComponent as DropdownLogo } from "./image/dropdown.svg";
import { ReactComponent as SearchIcon } from "./image/search.svg";
import { ReactComponent as FilterIcon } from "./image/filter.svg";
import "./user.scss";
const User = (props) => {
  return (
    <div className="user-container">
      <span className="navigate-bar">Admin / mvtuong</span>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ fontSize: "24px", fontWeight: "500" }}>User</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button type="primary" style={{ backgroundColor: "#1677ff" }}>
            {" "}
            Invite users{" "}
          </Button>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <span>hehe</span>
                </Menu.Item>
              </Menu>
            }
            trigger={["click"]}
          >
            <DropdownLogo style={{ marginLeft: "10px" }} />
          </Dropdown>
        </div>
      </div>
      <span className="help-info">
        Manage product access for all the users in your organization.{" "}
        <a href="/" className="help-link">
          Learn more about access settings
        </a>
      </span>
      <Row className="teams-info">
        <Space size={20}>
          <Col>
            <Row className="teams-row">Total users</Row>
            <Row className="teams-col">9</Row>
          </Col>
          <Col>
            <Row className="teams-row">Active users</Row>
            <Row className="teams-col">8</Row>
          </Col>
          <Col>
            <Row className="teams-row">Administrator</Row>
            <Row className="teams-col">2</Row>
          </Col>
        </Space>
      </Row>
      <div className='search-filter'>
        <div className="search-box">
          <input type="text" placeholder="Enter name or email address" />
          <SearchIcon className="search-icon" />
        </div>
        <div className="filter-box">
          <FilterIcon className="filter-icon" />
          <div>Filter</div>
        </div>
      </div>
      <div className='teams-member'>
        <Row className='table-header'>
          <Col className='table-username'>
            User
          </Col>
          <Col className='table-active'>
            Last active
          </Col>
          <Col className='table-status'>
            Status
          </Col>
          <Col className='table-action'>
            Action
          </Col>
          <Col className='table-threedot'>
          </Col>
        </Row>
        
      </div>
    </div>
  );
};

export default User;
