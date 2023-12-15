import React from "react";
import { useContext } from "react";
import GlobalContext from "./context/GlobalContext";

export default function Labels() {
  const { labels, updateLabel } = useContext(GlobalContext);

  function renameLbl(lbl) {
    if (lbl === "Low") {
      return "#22C55E";
    } else if (lbl === "High") {
      return "#EF4444";
    } else {
      return "#F97316";
    }
  }
  return (
    <React.Fragment>
      <p className="text-gray-500 font-bold mt-10">Filter</p>
      {labels.map(({ priority: lbl, checked }, idx) => (
        <label key={idx} className="items-center mt-3 block">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => updateLabel({ priority: lbl, checked: !checked })}
            className={`form-checkbox h-5 w-5 rounded focus:ring-0 cursor-pointer`}
            style={{ backgroundColor: renameLbl(lbl) }}
          />
          <span className="ml-2 text-gray-700 capitalize">
            {lbl}
          </span>
        </label>
      ))}
    </React.Fragment>
  );
}
