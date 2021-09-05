import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { createRef } from 'react';
import ResponsiveProductItemCardView, {
  ResponsiveProductItemCardViewProps,
} from '../view';
import React from 'react';

export default {
  title: 'Components/Product Item Card/Designs',
  component: ResponsiveProductItemCardView,
} as Meta;

const Template: Story<ResponsiveProductItemCardViewProps> = (args) => {
  const cardRef = createRef<HTMLDivElement>();

  return (
    <ResponsiveProductItemCardView
      {...args}
      cardRef={cardRef}
      animationClass={''}
    />
  );
};

export const Small = Template.bind({});
Small.args = {
  productItem: {
    id: 1,
    title: 'The best laptop',
    imgUrl:
      'https://www.junglescout.com/wp-content/uploads/2020/06/homepage-laptop-floating-mockup.png',
    price: 123.56,
    description:
      "The best laptop in the world. I mean, if you don't buy it, you don't deserve to live. What are you waiting for?",
  },
  onSelect: action('Selected'),
  action: 'See details',
  sizeClass: 'to-small',
};

export const Medium = Template.bind({});
Medium.args = {
  ...Small.args,
  sizeClass: 'from-small-to-under-big',
};

export const Large = Template.bind({});
Large.args = {
  ...Small.args,
  sizeClass: 'from-big',
};
