import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import VideoPlayer from '../../pages/VideoPlayer';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    search: jest.fn,
  }),
  useHistory: () => ({
    push: jest.fn,
  }),
}));

describe('<VideoPlayer /> component', () => {
  it('should render properly', () => {
    const tree = renderer.create(<VideoPlayer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
