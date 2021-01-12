import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Favorites from '../../pages/Favorites';

Enzyme.configure({ adapter: new Adapter() });

describe('<Favorites /> component', () => {
  it('should render properly', () => {
    const tree = renderer.create(<Favorites />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
