import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { useContext } from "react";
import GlobalContext from "./context/GlobalContext";
const CreateEventButton = () => {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <>
      <button
        onClick={() => setShowEventModal(true)}
        className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl bg-blue-500 justify-center"
      >
        {/* <PlusOutlined /> */}
        <span className="pl-3 pr-7" style={{color: 'white'}}>+ Create</span>
      </button>
    </>
  );
};

export default CreateEventButton;
