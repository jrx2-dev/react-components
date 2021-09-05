import React from 'react';
import * as ReactDOM from 'react-dom';
import { Responsive } from '../src/components/ResponsiveProductItemCard/stories/index.stories';

describe('Responsive Product Item Card', () => {
  it('Renders without crashing', () => {
    const div = document.createElement('div');
    const props = {
      productItem: {
        id: 1,
        title: 'The best laptop',
        imgUrl:
          'https://www.junglescout.com/wp-content/uploads/2020/06/homepage-laptop-floating-mockup.png',
        price: 123.56,
        description:
          "The best laptop in the world. I mean, if you don't buy it, you don't deserve to live. What are you waiting for?",
      },
      onSelect: () => {},
    };
    ReactDOM.render(<Responsive {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
