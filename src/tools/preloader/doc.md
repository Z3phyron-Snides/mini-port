# PreLoader component in React with Styled-Components

A pre-loader component to display a loading animation while data is being loaded. The pre-loader can be configured to display one of several pre-loading animation styles, and the size and color can also be customized.

## Usage

Import the `PreLoader` component in your React component:

import React from 'react';
import PreLoader from './PreLoader';



Use the `PreLoader` component in your component, for example:

const App = () => {
return (
<div>
<PreLoader type="points-opacity" size="100px" color="#ff4136" />
</div>
);
};



## Props

The `PreLoader` component accepts the following props:

- `type`: (optional) the type of pre-loading animation to display. Available options are:
  - `"default"`
  - `"points"`
  - `"points-opacity"`
  - `"gradient"`
  - `"spinner"`

- `size`: (optional) the size of the pre-loading animation. Can be set to a number or a string (e.g. `50` or `"50px"`).

- `color`: (optional) the color of the pre-loading animation. Can be set to any valid CSS color value (e.g. `"#ff4136"` or `"red"`).
