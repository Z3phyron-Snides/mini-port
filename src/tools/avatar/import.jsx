import React from "react";
import AvatarComponent from "./AvatarComponent";

const App = () => {
  return (
    <div>
      <AvatarComponent
        src="https://via.placeholder.com/150"
        initials="DK"
        text="David Kim"
        options={["Option 1", "Option 2", "Option 3"]}
      />
    </div>
  );
};

export default App;
