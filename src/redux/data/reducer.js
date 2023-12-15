import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "data",
  initialState: {
    taskList: [],
    workspaceList: [],
    userList: [],
  },
  reducers: {
    initTaskList: (state, action) => {
      state.taskList = action.payload;
    },
    updateTask: (state, action) => {
      const { id, status } = action.payload;
      const currentTaskIndex = state.taskList.findIndex(
        (task) => task.id == id
      );
      if (currentTaskIndex !== -1) {
        state.taskList[currentTaskIndex].status = status;
      }
    },
    initWorkspaceList: (state, action) => {
      state.workspaceList = action.payload;
    },
    initUserList: (state, action) => {
      state.userList = action.payload;
    },
    addTask: (state, action) => {
      state.taskList.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.taskList.pop(action.payload);
    },
  },
});

export const {
  initTaskList,
  updateTask,
  initWorkspaceList,
  initUserList,
  addTask,
  deleteTask,
  
} = DataSlice.actions;

export default DataSlice.reducer;
