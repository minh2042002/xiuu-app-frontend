import * as data from "../sample-data"

const getTaskList = () => {
  return data.TASK_LIST
}

const getWorkspaceList = () => {
  return data.WORKSPACE_LIST
}

const getUserList = () => {
  return data.USER_LIST
}

const getGroupList = () => {
  return data.GROUP_LIST
}

export { getGroupList, getUserList, getWorkspaceList, getTaskList }