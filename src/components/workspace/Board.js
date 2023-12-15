import React from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { useState, useEffect } from "react";
import Card from "../card/index";
import { sectionStyle } from "./style";
import { useDispatch } from "react-redux";
import { deepCopy } from "../../utils";
import { updateTask } from "../../redux/data/reducer";
import { Avatar, Tooltip, Button, Modal, Row, Col, Input } from "antd";
import "./board.scss";
import CreateTask from "../../components/modal/CreateTask.jsx";
const Board = ({ workspace, taskList, userList }) => {
  const classes = sectionStyle();
  const sortedTaskList = [...taskList].sort((a, b) => {
    const priorityOrder = { High: 3, Medium: 2, Low: 1 };
    const priorityA = priorityOrder[a.priority];
    const priorityB = priorityOrder[b.priority];

    return priorityB - priorityA;
  });
  const dispatch = useDispatch();
  const [data, setData] = useState(sortedTaskList);
  const [todoCount, setTodoCount] = useState(0);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [isModalCreateOpen, setIsModalCreateOpen] = useState(false);

  const showModal = () => {
    setIsModalCreateOpen(true);
  };

  useEffect(() => {
    setTodoCount(
      data.filter(
        (task) => task.status === "To Do" && task.workspace.id === workspace.id
      ).length
    );
    console.log(taskList);
    setInProgressCount(
      data.filter(
        (task) =>
          task.status === "In Progress" && task.workspace.id === workspace.id
      ).length
    );
    setDoneCount(
      data.filter(
        (task) => task.status === "Done" && task.workspace.id === workspace.id
      ).length
    );
  }, [data, workspace]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const tasks = deepCopy(data);
      const movingTask = tasks.find((e) => e.id == result.draggableId);
      movingTask.status = destination.droppableId;
      dispatch(
        updateTask({ id: result.draggableId, status: destination.droppableId })
      );
      setData(tasks);
    }
  };

  const getUserWithID = (userId) => {
    const user = userList.find((user) => user.id === userId);
    return user;
  };

  return (
    <>
        <div
          style={{
            paddingBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span>Filter: </span>
            {workspace.user.map((user) => (
              <Tooltip
                key={user.id}
                title={getUserWithID(user.id).name + " ( " + user.role + " )"}
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
        <div>
          <DragDropContext onDragEnd={onDragEnd} style={{ width: "100%" }}>
            <div className={classes.kanban}>
              <Droppable key="To Do" droppableId="To Do">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    className={classes.kanban__section}
                    ref={provided.innerRef}
                  >
                    <div className={classes.kanban__section__title}>
                      <div>To Do</div>{" "}
                      <div style={{ fontSize: "14px", fontWeight: "400" }}>
                        Total {todoCount} issue
                      </div>
                    </div>
                    <div className={classes.kanban__section__content}>
                      {data.map(
                        (task, index) =>
                          task.status === "To Do" &&
                          task.workspace.id === workspace.id && (
                            <Draggable
                              key={`${task.id}`}
                              draggableId={`${task.id}`}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    ...provided.draggableProps.style,
                                    opacity: snapshot.isDragging ? "0.5" : "1",
                                  }}
                                >
                                  <Card task={task}></Card>
                                </div>
                              )}
                            </Draggable>
                          )
                      )}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
              <Droppable key="In Progress" droppableId="In Progress">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    className={classes.kanban__section}
                    ref={provided.innerRef}
                  >
                    <div className={classes.kanban__section__title}>
                      <div>In Progress</div>{" "}
                      <div style={{ fontSize: "14px", fontWeight: "400" }}>
                        Total {inProgressCount} issue
                      </div>
                    </div>
                    <div className={classes.kanban__section__content}>
                      {data.map(
                        (task, index) =>
                          task.status === "In Progress" &&
                          task.workspace.id === workspace.id && (
                            <Draggable
                              key={`${task.id}`}
                              draggableId={`${task.id}`}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    ...provided.draggableProps.style,
                                    opacity: snapshot.isDragging ? "0.5" : "1",
                                  }}
                                >
                                  <Card task={task}></Card>
                                </div>
                              )}
                            </Draggable>
                          )
                      )}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
              <Droppable key="Done" droppableId="Done">
                {(provided) => (
                  <div
                    {...provided.droppableProps}
                    className={classes.kanban__section}
                    ref={provided.innerRef}
                  >
                    <div className={classes.kanban__section__title}>
                      <div>Done</div>{" "}
                      <div style={{ fontSize: "14px", fontWeight: "400" }}>
                        Total {doneCount} issue
                      </div>
                    </div>
                    <div className={classes.kanban__section__content}>
                      {data.map(
                        (task, index) =>
                          task.status === "Done" &&
                          task.workspace.id === workspace.id && (
                            <Draggable
                              key={`${task.id}`}
                              draggableId={`${task.id}`}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    ...provided.draggableProps.style,
                                    opacity: snapshot.isDragging ? "0.5" : "1",
                                  }}
                                >
                                  <Card task={task}></Card>
                                </div>
                              )}
                            </Draggable>
                          )
                      )}
                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            </div>
          </DragDropContext>
        </div>
    </>
  );
};

export default Board;
