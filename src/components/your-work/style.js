import { createUseStyles } from "react-jss";

const useStyleYourWork = createUseStyles({
  yourWork: {
    display: "flex",
    flexDirection: "row",
    marginTop: "10px",
    width: "100%",
  },
  sidebar: {
    height: "100%",
  },
  content: {
    margin: "10px",
    width: "calc(100% - 200px)",
  },
});

export default useStyleYourWork;
