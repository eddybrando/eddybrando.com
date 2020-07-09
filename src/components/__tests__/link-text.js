import React from 'react';
import renderer from 'react-test-renderer';

import LinkText from '../link-text';

describe('LinkText', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <LinkText label="Contact me" to="/contact-me" style={{margin: 20}} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
