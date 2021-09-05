# React Components

## Objective:

This is a react component library to be used on demo/poc personal projects.

## Components availables:

- ResponsiveProductItemCard (with ProductItem interface and ResponsiveProductItemCardView component to be used to get fixed design using desired responsive class)

## Extras

A small animation is also applied between component layout changes, the logic is isolated in a custom hook (useFadeOnSizeChange), it provides custom class to apply at the correct time and order to trigger the animation. The style for that classes are in the Theme folder.

Storybook is also installed to visualize the components in their different states.

## Considerations

The project was created using tsdx with the react-with-storybook template and configurations were made to use CSS modules, also I'm using a lazy load image library for the product image.