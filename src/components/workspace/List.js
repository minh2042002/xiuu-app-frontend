import React, { useState, useEffect } from "react";
import { Avatar, Tooltip, Button, Row, Col, Table } from "antd";
import "./list.scss";
import TaskDetail from "../../components/modal/TaskDetail.jsx";
import CreateTask from "../../components/modal/CreateTask.jsx";
const List = ({ workspace, taskList, userList }) => {
  const [workspaceTask, setWorkspaceTask] = useState([]);
  const [isModalDetailVisible, setIsModalDetailVisible] = useState(false);
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);
  const [modalTask, setModalTask] = useState();
  const getUserWithID = (userId) => {
    const user = userList.find((user) => user.id === userId);
    return user;
  };

  const getUserRoleWithID = (userId) => {
    const user = workspace.user.find(
      (workspaceUser) => workspaceUser.id === userId
    );
    if (user) {
      return user.role;
    }
  };

  const showModal = () => {
    setIsModalCreateOpen(true);
  };

  const renderStatus = (taskStatus) => {
    if (taskStatus === "Done") {
      return <div className="task-status-done">{taskStatus}</div>;
    } else if (taskStatus === "In Progress") {
      return <div className="task-status-doing">{taskStatus}</div>;
    } else {
      return <div className="task-status-todo">{taskStatus}</div>;
    }
  };

  const renderPriority = (taskPriority) => {
    if (taskPriority === "High") {
      return <div className="high-priority">{taskPriority}</div>;
    } else if (taskPriority === "Medium") {
      return <div className="medium-priority">{taskPriority}</div>;
    } else {
      return <div className="low-priority">{taskPriority}</div>;
    }
  };

  const getWorkspaceTask = (taskList, workspaceId) => {
    return taskList.filter((task) => task.workspace.id === workspaceId);
  };

  const taskCount = (workspaceTask, status) => {
    let count = 0;
    workspaceTask.map((task) => {
      if (task.status === status) {
        count++;
      }
    });
    return count;
  };

  const handleClickRow = (task) => {
    setIsModalDetailVisible(true);
    setModalTask(task);
  };

  const columns = [
    {
      title: "Workspace",
      dataIndex: "workspace",
      key: "workspace",
      render: (workspace) => <span>{workspace.name}</span>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (priority) => renderPriority(priority),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => renderStatus(status),
    },
    {
      title: "Assignee",
      dataIndex: "assignee",
      key: "assignee",
      render: (assignee) => (
        <>
          {assignee.map((user) => (
            <Tooltip
              key={user.id}
              title={`${user.name} (${getUserRoleWithID(user.id)})`}
              placement="top"
              style={{ width: "100%", height: "100%" }}
            >
              <Avatar src={user.avatar} />
            </Tooltip>
          ))}
        </>
      ),
    },
  ];

  useEffect(() => {
    setWorkspaceTask(getWorkspaceTask(taskList, workspace.id));
  }, [taskList, workspace]);

  return (
    <div className="list-container">
      <div
        style={{
          paddingBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "16px",
        }}
      >
        <div>
          <span>Filter: </span>
          {workspace.user.map((user) => (
            <Tooltip
              key={user.id}
              title={getUserWithID(user.id).name + " ( " + user.role + " )"}
              placement="top"
              style={{ width: "100%", height: "100%" }}
            >
              <Avatar src={getUserWithID(user.id).avatar} />
            </Tooltip>
          ))}
        </div>
        <CreateTask isModalCreateOpen={isModalCreateOpen} setIsModalCreateOpen={setIsModalCreateOpen} workspaceCurrent={workspace} />
        <Button
          type="primary"
          className="bg-blue-500 text-white"
          onClick={showModal}
          style={{marginRight: '200px'}}
        >
          + Create
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "20px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>Stage 1</div>
        <div className="stage-1-table">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>{workspaceTask.length} Tasks</span>
            <div className="task-count-list">
              <span className="task-count-todo">
                {taskCount(workspaceTask, "To Do")}
              </span>
              <span className="task-count-doing">
                {taskCount(workspaceTask, "In Progress")}
              </span>
              <span className="task-count-done">
                {taskCount(workspaceTask, "Done")}
              </span>
            </div>
          </div>
          <div className="task-list-render">
            <Table
              dataSource={workspaceTask}
              columns={columns}
              rowKey="id"
              onRow={(task) => ({
                onClick: () => handleClickRow(task),
              })}
            />
            <TaskDetail
              isModalDetailVisible={isModalDetailVisible}
              task={modalTask}
              userList={userList}
              setIsModalDetailVisible={setIsModalDetailVisible}
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: "10px" }}>Stage 2</div>
        <div className="stage-1-table">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>{workspaceTask.length} Tasks</span>
            <div className="task-count-list">
              <span className="task-count-todo">
                {taskCount(workspaceTask, "To Do")}
              </span>
              <span className="task-count-doing">
                {taskCount(workspaceTask, "In Progress")}
              </span>
              <span className="task-count-done">
                {taskCount(workspaceTask, "Done")}
              </span>
            </div>
          </div>
          <div className="task-list-render">
            <Table
              dataSource={workspaceTask}
              columns={columns}
              rowKey="id"
              onRow={(task) => ({
                onClick: () => handleClickRow(task),
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
