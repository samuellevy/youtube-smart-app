import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Search from '../../pages/Search';
import VirtualKeyboard from '../../components/VirtualKeyboard';

Enzyme.configure({ adapter: new Adapter() });

describe('<Search /> component', () => {
  it('should render properly', () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render VirtualKeyboard component', () => {
    const tree = shallow(<Search />).dive();
    expect(tree.exists('VirtualKeyboard')).toBeTruthy();
  });
});
