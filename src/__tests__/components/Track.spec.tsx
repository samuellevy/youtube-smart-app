import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import { fireEvent, waitFor } from '@testing-library/react';
import Track from '../../components/Track';
import { IVideo } from '../../dtos/IVideo';

Enzyme.configure({ adapter: new Adapter() });

const mockedHandleOut = jest.fn();
const mockedHandlePlay = jest.fn();
const mockedKeyboard = jest.fn();
const mockedDispatch = jest.fn();
const mockVideoItem: IVideo[] = [{
  channelId: 'a', channelTitle: 'teste', description: 'description', id: 'id', publishedAt: 'published', thumbnail: { default: { url: '' }, high: { url: '' }, medium: { url: '' } }, title: 'title', viewCount: 1,
}];
const mockItem = { id: 'teste', title: 'Teste', videos: mockVideoItem };

jest.mock('../../context/KeyboardContext', () => ({
  useKeyboardContext: () => ({
    keyboard: () => mockedKeyboard(),
    dispatch: () => mockedDispatch(),
  }),
}));

describe('<Search /> component', () => {
  const component = renderer.create(<Track
    handleOut={() => mockedHandleOut}
    handlePlay={() => jest.fn()}
    item={mockItem}
  />);

  const jsonComponent: ReactTestRendererJSON | any = component.toJSON();

  it('should render properly', () => {
    expect(jsonComponent).toMatchSnapshot();
  });

  it('should render container div component', () => {
    const tree = shallow(<Track
      handleOut={() => mockedHandleOut}
      handlePlay={() => mockedHandlePlay}
      item={mockItem}
    />).dive();

    expect(tree.exists('div')).toBeTruthy();
  });

  it('should render one Track', () => {
    expect(jsonComponent.children).toHaveLength(1);
  });
});
