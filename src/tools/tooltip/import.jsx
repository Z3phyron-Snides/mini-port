import React from "react";
import Tooltip from "./Tooltip";

const ExampleComponent = () => {
  return (
    <div>
      <Tooltip content="This is a tooltip">
        <button>Hover over me</button>
      </Tooltip>
    </div>
  );
};

export default ExampleComponent;
