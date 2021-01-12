import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import { fireEvent, waitFor } from '@testing-library/react';
import VirtualKeyboard from '../../components/VirtualKeyboard';

Enzyme.configure({ adapter: new Adapter() });

const mockedHandleOut = jest.fn();
const mockedKeyboard = jest.fn();
const mockedDispatch = jest.fn();

jest.mock('../../context/KeyboardContext', () => ({
  useKeyboardContext: () => ({
    keyboard: () => mockedKeyboard(),
    dispatch: () => mockedDispatch(),
  }),
}));

describe('<Search /> component', () => {
  const component = renderer.create(<VirtualKeyboard
    handleOut={() => mockedHandleOut}
    handleQuery={() => jest.fn()}
  />);

  const jsonComponent: ReactTestRendererJSON | any = component.toJSON();

  it('should render properly', () => {
    expect(jsonComponent).toMatchSnapshot();
  });

  it('should render container div component', () => {
    const tree = shallow(<VirtualKeyboard
      handleOut={() => mockedHandleOut}
      handleQuery={() => jest.fn()}
    />).dive();

    expect(tree.exists('div')).toBeTruthy();
  });

  it('should render VirtualKeyboard lines', () => {
    expect(jsonComponent.children).toHaveLength(6);
  });
});
