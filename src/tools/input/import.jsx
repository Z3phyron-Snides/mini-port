import React, { useState } from "react";
import Input from "./Input";

const App = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Input
        name="username"
        label="Username"
        value={value}
        onChange={handleChange}
        placeholder="Enter your username"
        borderColor="#ff9933"
        status="large"
        onFocus={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default App;
