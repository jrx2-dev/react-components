import { Meta } from '@storybook/react/types-6-0';
import { Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ResponsiveProductItemCard, { ResponsiveProductItemCardProps } from '..';
import React from 'react';

export default {
  title: 'Components/Product Item Card',
  component: ResponsiveProductItemCard,
} as Meta;

const Template: Story<ResponsiveProductItemCardProps> = (args) => {
  return <ResponsiveProductItemCard {...args} />;
};

export const Responsive = Template.bind({});
Responsive.args = {
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
};
