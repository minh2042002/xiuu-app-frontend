import React from "react";
import { useState } from "react";
import { useContext } from "react";
import GlobalContext from "./context/GlobalContext";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Col, Dropdown, Menu, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "../../../redux/data/reducer";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
const labelsClasses = ["#22C55E", "#EF4444", "#F97316"];

export const EventModal = () => {
  const { setShowEventModal, daySelected, dispatchCallEvent, selectedEvent } =
    useContext(GlobalContext);
  const [deadline, setDeadline] = useState(
    selectedEvent ? selectedEvent.deadline : null
  );
  const workspaceList = useSelector((state) => state.data.workspaceList);
  const userList = useSelector((state) => state.data.userList);
  const [tab, setTab] = useState("yourWork");
  const [workspaceTab, setWorkspaceTab] = useState(null);
  const [wsName, setWsName] = useState(
    selectedEvent ? selectedEvent.workspace : ""
  );
  const [showAlert, setShowAlert] = useState(false);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const dispatch = useDispatch();
  const [timeRemaining, setTimeRemaining] = useState("1d");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => renameLbl(lbl) === selectedEvent.priority)
      : labelsClasses[0]
  );
  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      priority: renameLbl(selectedLabel),
      startTime: daySelected.valueOf(),
      endTime: endTime,
      id: selectedEvent ? selectedEvent.id : Date.now(),
      workspace: wsName,
      timeRemaining: timeRemaining,
      status: "To Do",
      deadline: deadline,
    };
    if (selectedEvent) {
      dispatchCallEvent({ type: "update", payload: calendarEvent });
      dispatch(updateTask(calendarEvent));
    } else {
      dispatchCallEvent({ type: "push", payload: calendarEvent });
      dispatch(addTask(calendarEvent));
    }

    setShowEventModal(false);
  }
  const taskList = useSelector((state) => state.data.taskList);

  function renameLbl(lbl) {
    if (lbl === "#22C55E") {
      return "Low";
    } else if (lbl === "#EF4444") {
      return "High";
    } else {
      return "Medium";
    }
  }
  const [endTime, setEndTime] = useState(
    selectedEvent ? selectedEvent.endTime : null
  );

  const handleDateChange = (date) => {
    setEndTime(date);
  };

  const handleDropdownChange = (value) => {
    setTab("workspace");
    setWorkspaceTab(value.key);
    setWsName(value);
  };
  return (
    <div className="h-screen w-full fixed left-8 top-0 flex justify-center items-center ">
      <form
        className="bg-white  shadow-2xl w-1/3 "
        style={{ border: "1px solid black" }}
      >
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selectedEvent && (
              <span
                className="material-icons-outlined text-gray-400 cursor-pointer"
                onClick={() => {
                  dispatchCallEvent({ type: "delete", payload: selectedEvent });
                  setShowEventModal(false);
                  dispatch(deleteTask(selectedEvent));
                }}
              >
                delete
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/3 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="pt-3 border-0 text-gray-600 font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="text-gray-400">Workspace</span>
            <div>
              <Menu
                selectedKeys={[tab]}
                mode="horizontal"
                // style={{ width: "50%" }}
              >
                <Menu.Item key={Math.random}>
                  <Dropdown
                    key={Math.random}
                    overlay={
                      <Menu>
                        {workspaceList.map((workspace) => (
                          <Menu.Item
                            key={workspace.id}
                            onClick={() => handleDropdownChange(workspace)}
                          >
                            <Row
                              style={{
                                display: "flex",
                                alignItems: "center",
                                height: "50px",
                              }}
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
                              <Col style={{ height: "50px" }}>
                                <Row>
                                  <span style={{ height: "20px" }}>
                                    {workspace.name}
                                  </span>
                                </Row>
                                <Row>
                                  <span >
                                    {workspace.description}
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Menu.Item>
                        ))}
                        <hr style={{ width: "90%" }} />
                      </Menu>
                    }
                    placement="bottomLeft"
                    trigger={["click"]}
                  >
                    <div style={{ marginLeft: "20px" }}>
                      {wsName !== "" ? (
                        <Row
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Col style={{ marginRight: "15px" }}>
                            <img
                              style={{
                                width: "20px",
                                height: "20px",
                                marginRight: "5px",
                              }}
                              src={wsName.avatar}
                              alt=""
                            />
                          </Col>
                          <Col>
                            <Row>
                              <span style={{ height: "20px" }}>{wsName.name}</span>
                            </Row>
                            <Row>
                              <span >{wsName.description}</span>
                            </Row>
                          </Col>
                        </Row>
                      ) : (
                        <DownOutlined
                          style={{
                            fontSize: "10px",
                            border: "1px solid",
                          }}
                        />
                      )}
                    </div>
                  </Dropdown>
                </Menu.Item>
              </Menu>
            </div>
            <span className="text-gray-400  justify-center items-center">
              Start time
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className="text-gray-400 justify-center items-center">
              End time
            </span>
            <p>
              <DatePicker
                selected={endTime}
                onChange={handleDateChange}
                dateFormat="EEEE, MMM dd"
              />
            </p>
            <span className="text-gray-400 justify-center items-center">
              Deadline
            </span>
            <p>
              <DatePicker
                selected={deadline}
                onChange={(date) => setDeadline(date)}
                dateFormat="EEEE, MMM dd"
              />
            </p>

            <p className="text-gray-400">Remaining</p>
            <p className="text-red-400">
              {deadline !== null ? (
                (new Date(deadline).getTime() - daySelected.valueOf()) /
                  (1000 * 60 * 60 * 24) +
                `d`
              ) : (
                <></>
              )}
            </p>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelsClasses.map((lblClass, i) => (
                <span
                  key={i}
                  onClick={() => {
                    setSelectedLabel(lblClass);
                  }}
                  className={` w-14 h-6 rounded flex items-center justify-center cursor-pointer`}
                  style={{ backgroundColor: lblClass }}
                >
                  {selectedLabel === lblClass && (
                    <span className=" text-white text-sm">
                      {renameLbl(lblClass)}
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white "
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};
