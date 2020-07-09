import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import ContactMePage from '../contact-me';

describe('ContactMePage', () => {
  it('renders correctly', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<ContactMePage />);
    expect(result).toMatchSnapshot();
  });
});
