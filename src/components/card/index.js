import React from "react";
import { Col, Row, Avatar, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import cardStyle from "./style";
import TaskItemPriorityBadge from "./priorityTask";
const Card = ({ task }) => {
  const classes = cardStyle();
  return (
    <div
      className={`${classes.card} ${
        task.status === "Done" ? classes.done : ""
      }`}
    >
      <Row>
        <Col span={18}>
          {task.description && (
            <div style={{ marginBottom: "10px" }}>{task.description}</div>
          )}
          {!task.description && (
            <div style={{ marginBottom: "10px" }}>Unnamed</div>
          )}

          <div>
            <TaskItemPriorityBadge priorityTask={task.priority} />
          </div>
        </Col>
        <Col span={6} >
          <div style={{width: '100%', height: '100%'}} className={classes.UnassignedAvatar}>
            {!task.assignee?.length && (
              <Tooltip title="Unassigned" placement="top">
                <Avatar size="small" icon={<UserOutlined />} />
              </Tooltip>
            )}
            {task.assignee && (
              <Avatar.Group size="small" maxCount={2} className={classes.avatar}>
                {task.assignee?.map((assignee) => {
                  return (
                    <Tooltip
                      key={assignee.id}
                      title={assignee.name}
                      placement="top"
                      style={{width: '100%', height: '100%'}}
                    >
                      <Avatar src={assignee.avatar} />
                    </Tooltip>
                  );
                })}
              </Avatar.Group>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Card;
