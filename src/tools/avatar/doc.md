# AvatarComponent

A reusable avatar component that takes either an image or user initials and a dropdown for navigation.

## Props

- `color` (string, default: `"#f2f2f2"`): The background color of the Avatar.
- `textColor` (string, default: `"#000000"`): The text color of the text and dropdown options.
- `src` (string, default: `""`): The source URL of the image to be displayed as the Avatar.
- `initials` (string, default: `""`): The user's initials to be displayed as the Avatar if no image is provided.
- `text` (string, default: `""`): The text to be displayed below the Avatar.
- `alt` (string, default: `""`): The alternative text for the image.
- `size` (number, default: `100`): The size of the Avatar.
- `bordered` (bool, default: `false`): Whether or not to display a border around the Avatar.
- `zoomed` (bool, default: `false`): Whether or not to display the Avatar with a zoomed-in effect.
- `icon` (string, default: `""`): The name of a font awesome icon to be displayed next to the text.
- `borderRadius` (number, default: `0`): The border radius of the Avatar.
- `animated` (bool, default: `false`): Whether or not to display the Avatar with an animation effect.
- `options` (array, default: `[]`): An array of dropdown options to be displayed in the navigation dropdown.

## Example Usage

```jsx
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
```
