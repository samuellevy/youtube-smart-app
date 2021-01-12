import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import Results from '../../pages/Results';
import Track from '../../components/Track';

Enzyme.configure({ adapter: new Adapter() });

describe('<Results /> component', () => {
  it('should render properly', () => {
    const tree = renderer.create(<Results />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
