import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Avatar, Tooltip } from "antd";
import { Dropdown, Space, Typography } from "antd";
import { Select } from "antd";
import DatePicker from "react-datepicker";
const { Option } = Select;
const TaskDetail = ({ isModalDetailVisible, task, userList, setIsModalDetailVisible }) => {
  const [isClickEdit, setIsClickEdit] = useState(false);
  const [workspace, setWorkspace] = useState(task?.workspace);
  const [assignee, setAssignee] = useState(task?.assignee);
  const [priority, setPriority] = useState(task?.priority);
  const [deadline, setDeadline] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [startTime, setStartTime] = useState(null);
  var count = 0;

  const getUserWithID = (userId) => {
    const user = userList.find((user) => user.id === userId);
    return user;
  };

  const showModal = () => {
    setIsModalDetailVisible(true);
  };

  const handleOk = () => {
    setIsModalDetailVisible(false);
  };

  const handleCancel = () => {
    setIsModalDetailVisible(false);
  };

  const handleEdit = (index) => {
    setIsClickEdit(true);
    count++;
    console.log(count);
    if (count % 2 === 0) {
      setIsClickEdit(false);
    } else {
      setIsClickEdit(true);
    }
  };
  const handleDelete = (index) => {
    setIsModalDetailVisible(false);
  };
  const handleChangePrio = (value) => {
    setPriority(value);
  };
  const handleChangeDeadline = (date) => {
    setDeadline(date);
  };
  const handleChangeSt = (date) => {
    setStartTime(date);
  };
  const handleChangeEnd = (date) => {
    setEndTime(date);
  };
  return (
    <div>
      <Modal
        title="TASK DETAIL"
        open={isModalDetailVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="delete"
            onClick={handleDelete}
            className="bg-red-600 text-white"
          >
            Delete
          </Button>,
          <Button
            key="edit"
            onClick={handleEdit}
            className="bg-zinc-600 text-white"
          >
            Edit
          </Button>,
          <Button
            key="save"
            onClick={handleOk}
            className="bg-blue-600 text-white"
          >
            {isClickEdit ? "Update" : "Ok"}
          </Button>,
        ]}
      >
        <div className="grid grid-cols-2 ">
          <div className="">
            <div className="font-bold">Description</div>
            <div className="text-gray-400">{task?.description}</div>
          </div>
          <div className="">
            <span
              className={`p-2 rounded-md text-white ${
                task?.status === "Done"
                  ? "bg-green-600"
                  : task?.status === "In Progress"
                  ? "bg-blue-600"
                  : "bg-gray-600"
              }`}
            >
              {task?.status}
            </span>
            <div className="grid grid-cols-2 text-black">
              <div className="" style={{lineHeight: '30px'}}>
                <div className="m-1 mt-4">Workspace</div>
                <div className="m-1">Assignee</div>
                <div className="m-1">Priority</div>
                <div className="m-1">Deadline</div>
                <div className="m-1"> Time remaining</div>
                <div className="m-1"> Start time</div>
                <div className="m-1">End time</div>
              </div>
              <div>
                {isClickEdit ? (
                  <div>
                    <input
                      type="text"
                      value={workspace}
                      onChange={(e) => {
                        setWorkspace(e.target.value);
                      }}
                      // onBlur={()=>{setIsClickEdit(false)}}
                      autoFocus
                      className="m-1 mt-4 w-28 h-2"
                    />
                    <input
                      type="text"
                      className="m-1 w-28 h-2"
                      onChange={(e) => {
                        setAssignee(e.target.value);
                      }}
                      value={assignee}
                    />
                    <Select
                      value={priority}
                      className="ml-1"
                      onChange={handleChangePrio}
                    >
                      <Option value="Option 1">High</Option>
                      <Option value="Option 2">Medium</Option>
                      <Option value="Option 3">Low</Option>
                    </Select>
                    <DatePicker
                      selected={deadline}
                      onChange={handleChangeDeadline}
                      className=" w-28 h-2 m-1"
                    />
                    <input
                      type="text"
                      className="m-1 w-28 h-2"
                      value={task?.timeRemaining}
                    />
                    <DatePicker
                      selected={startTime}
                      onChange={handleChangeSt}
                      className=" w-28 h-2 m-1"
                    />
                    <DatePicker
                      selected={endTime}
                      onChange={handleChangeEnd}
                      className=" w-28 h-2 m-1"
                    />
                  </div>
                ) : (
                  <div style={{width: '200px', lineHeight: '29px'}}>
                    <div className="m-1 mt-4">{task?.workspace?.name}</div>
                    <div className="m-1">
                      {task?.assignee?.map((user) => (
                        <Tooltip
                          key={user.id}
                          title={
                            getUserWithID(user.id).name +
                            " ( " +
                            user.role +
                            " )"
                          }
                          placement="top"
                          style={{ width: "100%", height: "100%" }}
                        >
                          <Avatar src={getUserWithID(user.id).avatar} />
                        </Tooltip>
                      ))}
                    </div>
                    <div className="m-1">{task?.priority}</div>
                    <div className="m-1">{task?.deadline} </div>
                    <div className="m-1"> {task?.timeRemaining}</div>
                    <div className="m-1">{task?.startTime}</div>
                    <div className="m-1">{task?.endTime}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TaskDetail;
