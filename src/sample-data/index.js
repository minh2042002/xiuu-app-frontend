import { v4 as uuidv4 } from "uuid";

const USER_LIST = [
  {
    id: "USER-1",
    name: "Tuong Mai",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    group: [
      "administrator",
      "uiux-group-admin",
      "oop-group-user",
      "uiux-group-user",
    ],
    workspace: ["WS-1", "WS-3"],
  },
  {
    id: "USER-2",
    name: "Ming",
    avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/35.jpg",
    group: ["uiux-group-admin", "oop-group-user", "uiux-group-user"],
    workspace: ["WS-1"],
  },
  {
    id: "USER-3",
    name: "Thai",
    avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/36.jpg",
    group: ["uiux-group-user"],
    workspace: ["WS-1", "WS-3"],
  },
  {
    id: "USER-4",
    name: "Thịnh Huy",
    avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/37.jpg",
    group: ["user"],
    workspace: ["WS-1"],
  },
  {
    id: "USER-5",
    name: "Phương Thảo",
    avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/38.jpg",
    group: ["user"],
    workspace: ["WS-1"],
  },
  {
    id: "USER-6",
    name: "Minh Hiếu",
    avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/39.jpg",
    group: ["user"],
    workspace: ["WS-2", "WS-3"],
  },
  {
    id: "USER-7",
    name: "Hong Hanh",
    avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/40.jpg",
    group: ["user"],
    workspace: ["WS-2"],
  },
  {
    id: "USER-8",
    name: "Duy Quân",
    avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/34.jpg",
    group: ["user"],
    workspace: ["WS-2,WS-3"],
  },
  {
    id: "USER-9",
    name: "Ngọc Tú",
    avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/33.jpg",
    group: ["user"],
    workspace: ["WS-2"],
  },
  {
    id: "USER-10",
    name: "Thái Hòa",
    avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/32.jpg",
    group: ["user"],
    workspace: ["WS-2", "WS-3"],
  },
];

const GROUP_LIST = [
  {
    id: "GROUP-1",
    key: "administrator",
    permission: {
      workspace: ["WS-1"],
      access: ["all-permission"],
    },
    user: ["USER-1"],
  },
  {
    id: "GROUP-2",
    key: "uiux-group-admin",
    permission: {
      workspace: ["WS-2"],
      access: ["CREATE", "VIEW", "EDIT"],
    },
    user: ["USER-1", "USER-2"],
  },
  {
    id: "GROUP-3",
    key: "oop-group-user",
    permission: {
      workspace: ["WS-3"],
      access: ["VIEW", "EDIT"],
    },
    user: ["USER-1", "USER-3", "USER-6", "USER-8", "USER-10"],
  },
  {
    id: "GROUP-4",
    key: "uiux-group-user",
    permission: {
      workspace: ["WS-2"],
      access: ["VIEW", "EDIT"],
    },
    user: ["USER-6", "USER-7", "USER-8", "USER-9", "USER-10"],
  },
];

const WORKSPACE_LIST = [
  {
    id: "WS-1",
    name: "Gia su",
    description: "Part-time job",
    avatar:
      "https://mvtuong.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=xxlarge",
    user: [
      { id: "USER-1", role: "Manager" },
      { id: "USER-2", role: "Giao Việc" },
      { id: "USER-3", role: "Người Thực Hiện Công Việc" },
      { id: "USER-4", role: "Phê Duyệt Công Việc" },
      { id: "USER-5", role: "Hỗ Trợ Công Việc" },
    ],
  },
  {
    id: "WS-2",
    name: "UIUX Group",
    description: "Software project",
    avatar:
      "https://mvtuong.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10414?size=xxlarge",
    user: [
      { id: "USER-6", role: "Manager" },
      { id: "USER-7", role: "Giao Việc" },
      { id: "USER-8", role: "Người Thực Hiện Công Việc" },
      { id: "USER-9", role: "Phê Duyệt Công Việc" },
      { id: "USER-10", role: "Hỗ Trợ Công Việc" },
    ],
  },
  {
    id: "WS-3",
    name: "OOP Group",
    description: "Software project",
    avatar:
      "https://mvtuong.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=xxlarge",
    user: [
      { id: "USER-1", role: "Manager" },
      { id: "USER-3", role: "Giao Việc" },
      { id: "USER-6", role: "Người Thực Hiện Công Việc" },
      { id: "USER-8", role: "Phê Duyệt Công Việc" },
      { id: "USER-10", role: "Hỗ Trợ Công Việc" },
    ],
  },
  {
    id: "WS-4",
    name: "Only me",
    description: "Do every thing",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    user: [],
  },
];

const TASK_LIST = [
  {
    id: uuidv4(),
    workspace: {
      id: "WS-1",
      name: "Gia su",
      description: "Part-time job",
      avatar:
        "https://mvtuong.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=xxlarge",
    },
    assignee: [
      {
        id: "USER-1",
        name: "Tuong Mai",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      },
      {
        id: "USER-2",
        name: "Ming",
        avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/35.jpg",
      },
    ],
    description: "Something need to done",
    priority: "High",
    deadline: "2023/06/03",
    timeRemaining: "1d",
    startTime: "2023/05/30 08:00:00",
    endTime: "2023/06/01 10:30:00",
    status: "Done",
  },
  {
    id: uuidv4(),
    workspace: {
      id: "WS-2",
      name: "UIUX Group",
      description: "Software project",
      avatar:
        "https://mvtuong.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10414?size=xxlarge",
    },
    assignee: [
      {
        id: "USER-2",
        name: "Ming",
        avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/35.jpg",
      },
    ],
    description: "Draw workspace screen",
    priority: "Medium",
    deadline: "2023/06/03",
    timeRemaining: "1d",
    startTime: "2023/05/30 08:00:00",
    endTime: "2023/06/01 10:30:00",
    status: "Done",
  },
  {
    id: uuidv4(),
    workspace: {
      id: "WS-2",
      name: "UIUX Group",
      description: "Software project",
      avatar:
        "https://mvtuong.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10414?size=xxlarge",
    },
    assignee: [
      {
        id: "USER-1",
        name: "Tuong Mai",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      },
    ],
    description: "Gaming",
    priority: "Low",
    deadline: "2023/06/03",
    timeRemaining: "1d",
    startTime: "2023/05/30 08:00:00",
    endTime: "2023/06/01 10:30:00",
    status: "Done",
  },
  {
    id: uuidv4(),
    workspace: {
      id: "WS-1",
      name: "Gia su",
      description: "Part-time job",
      avatar:
        "https://mvtuong.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=xxlarge",
    },
    assignee: [
      {
        id: "USER-1",
        name: "Tuong Mai",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      },
    ],
    description: "Watch Movie",
    priority: "High",
    deadline: "2023/06/03",
    timeRemaining: "1d",
    startTime: "2023/05/30 08:00:00",
    endTime: "2023/06/01 10:30:00",
    status: "In Progress",
  },
  {
    id: uuidv4(),
    workspace: {
      id: "WS-1",
      name: "Gia su",
      description: "Part-time job",
      avatar:
        "https://mvtuong.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=xxlarge",
    },
    assignee: [
      {
        id: "USER-1",
        name: "Tuong Mai",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      },
    ],
    description: "Do ITSS",
    priority: "High",
    deadline: "2023/06/03",
    timeRemaining: "1d",
    startTime: "2023/05/30 08:00:00",
    endTime: "2023/06/01 10:30:00",
    status: "To Do",
  },
  {
    id: uuidv4(),
    workspace: {
      id: "WS-1",
      name: "Gia su",
      description: "Part-time job",
      avatar:
        "https://mvtuong.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=xxlarge",
    },
    assignee: [
      {
        id: "USER-1",
        name: "Tuong Mai",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      },
    ],
    description: "Do Japanese",
    priority: "High",
    deadline: "2023/06/03",
    timeRemaining: "1d",
    startTime: "2023/05/30 08:00:00",
    endTime: "2023/06/01 10:30:00",
    status: "To Do",
  },
  {
    id: uuidv4(),
    workspace: {
      id: "WS-3",
      name: "OOP Group",
      description: "Software project",
      avatar:
        "https://mvtuong.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=xxlarge",
    },
    assignee: [
      {
        id: "USER-1",
        name: "Tuong Mai",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      },
    ],
    description: "Draw Something",
    priority: "High",
    deadline: "2023/06/03",
    timeRemaining: "1d",
    startTime: "2023/05/30 08:00:00",
    endTime: "2023/06/01 10:30:00",
    status: "To Do",
  },
  {
    id: uuidv4(),
    workspace: {
      id: "WS-3",
      name: "OOP Group",
      description: "Software project",
      avatar:
        "https://mvtuong.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=xxlarge",
    },
    assignee: [
      {
        id: "USER-3",
        name: "Thai",
        avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/36.jpg",
      },
    ],
    description: "Draw UML",
    priority: "High",
    deadline: "2023/06/03",
    timeRemaining: "1d",
    startTime: "2023/05/30 08:00:00",
    endTime: "2023/06/01 10:30:00",
    status: "To Do",
  },
  {
    id: uuidv4(),
    workspace: {
      id: "WS-3",
      name: "OOP Group",
      description: "Software project",
      avatar:
        "https://mvtuong.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10404?size=xxlarge",
    },
    assignee: [
      {
        id: "USER-3",
        name: "Thai",
        avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/36.jpg",
      },
    ],
    description: "Coding the filter",
    priority: "High",
    deadline: "2023/06/03",
    timeRemaining: "1d",
    startTime: "2023/05/30 08:00:00",
    endTime: "2023/06/01 10:30:00",
    status: "To Do",
  },
  {
    id: uuidv4(),
    workspace: {
      id: "WS-2",
      name: "UIUX Group",
      description: "Software project",
      avatar:
        "https://mvtuong.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10414?size=xxlarge",
    },
    assignee: [
      {
        id: "USER-7",
        name: "Hong Hanh",
        avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/40.jpg",
      },
    ],
    description: "Draw Figma",
    priority: "High",
    deadline: "2023/06/03",
    timeRemaining: "1d",
    startTime: "2023/05/30 08:00:00",
    endTime: "2023/06/01 10:30:00",
    status: "To Do",
  },
  {
    id: uuidv4(),
    workspace: {
      id: "WS-2",
      name: "UIUX Group",
      description: "Software project",
      avatar:
        "https://mvtuong.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10414?size=xxlarge",
    },
    assignee: [
      {
        id: "USER-7",
        name: "Hong Hanh",
        avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/40.jpg",
      },
    ],
    description: "Draw Sitemap",
    priority: "Low",
    deadline: "2023/06/03",
    timeRemaining: "1d",
    startTime: "2023/05/30 08:00:00",
    endTime: "2023/06/01 10:30:00",
    status: "To Do",
  },
  {
    id: uuidv4(),
    workspace: {
      id: "WS-2",
      name: "UIUX Group",
      description: "Software project",
      avatar:
        "https://mvtuong.atlassian.net/rest/api/2/universal_avatar/view/type/project/avatar/10414?size=xxlarge",
    },
    assignee: [
      {
        id: "USER-7",
        name: "Hong Hanh",
        avatar: "https://xsgames.co/randomusers/assets/avatars/pixel/40.jpg",
      },
    ],
    description: "Do form",
    priority: "Medium",
    deadline: "2023/06/03",
    timeRemaining: "1d",
    startTime: "2023/05/30 08:00:00",
    endTime: "2023/06/01 10:30:00",
    status: "To Do",
  },
];

export { USER_LIST, GROUP_LIST, WORKSPACE_LIST, TASK_LIST };
