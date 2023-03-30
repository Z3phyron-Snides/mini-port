# Skeleton Component Props

The Skeleton component accepts the following props:

## count?: number
Number of skeleton components to render. Default value is `1`.

## circle?: boolean
If set to `true`, the skeleton component will have a circular shape. Default value is `false`.

## width?: string | number
The width of the skeleton component. Can be specified as a string with a CSS unit (e.g. "50px") or a number (e.g. 50). Default value is `"100%"`.

## height?: string | number
The height of the skeleton component. Can be specified as a string with a CSS unit (e.g. "50px") or a number (e.g. 50). Default value is `"100%"`.

## borderRadius?: string | number
The border radius of the skeleton component. Can be specified as a string with a CSS unit (e.g. "5px") or a number (e.g. 5). Default value is `"5px"`.

## flexDirection?: string
The direction in which the skeleton components should be displayed. Can be `"row"` or `"column"`. Default value is `"column"`.

## marginLeft?: string | number
The left margin of the skeleton component. Can be specified as a string with a CSS unit (e.g. "10px") or a number (e.g. 10). Default value is `"0"`.

## marginTop?: string | number
The top margin of the skeleton component. Can be specified as a string with a CSS unit (e.g. "20px") or a number (e.g. 20). Default value is `"0"`.

## alignItems?: string
The alignment of the items within the skeleton component. Can be `"center"`, `"flex-start"`, `"flex-end"`, or `"stretch"`. Default value is `"stretch"`.

## animation?: 'pulse' | 'wave' | false
The animation to be applied to the skeleton component. Can be `"pulse"`, `"wave"`, or `false`. Default value is `false`.
