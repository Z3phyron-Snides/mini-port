# Skeleton Component

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| count | number | 1 | The number of skeleton elements to render. |
| circle | boolean | false | Determines if the skeleton should have rounded edges or not. |
| width | string &#124; number | '100%' | The width of the skeleton element. |
| height | string &#124; number | '100%' | The height of the skeleton element. |
| borderRadius | string &#124; number | '5px' | The border radius of the skeleton element. Will be set to '50%' if `circle` prop is set to `true`. |
| flexDirection | string | 'column' | The direction of the flexbox layout. |
| marginLeft | string &#124; number | '0' | The left margin of the skeleton element. |
| marginTop | string &#124; number | '0' | The top margin of the skeleton element. |
| alignItems | string | 'stretch' | The alignment of items along the cross axis. |
| animation | 'pulse' &#124; 'wave' &#124; false | false | The animation style of the skeleton element. Can be 'pulse', 'wave', or false (no animation). |

## Usage

```jsx
import React from 'react';
import Skeleton from './Skeleton';

const Example = () => {
  return (
    <>
      <Skeleton count={3} />
      <Skeleton count={2} animation="wave" />
      <Skeleton count={1} circle />
    </>
  );
};

export default Example;
