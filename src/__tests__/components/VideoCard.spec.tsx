import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

import { fireEvent, waitFor } from '@testing-library/react';
import { title } from 'process';
import VideoCard from '../../components/VideoCard';
import { IVideo } from '../../dtos/IVideo';

Enzyme.configure({ adapter: new Adapter() });

const mockedHandleOut = jest.fn();
const mockedHandlePlay = jest.fn();
const mockedKeyboard = jest.fn();
const mockedDispatch = jest.fn();

const mockVideoItem: IVideo = {
  channelId: 'a', channelTitle: 'teste', description: 'description', id: 'id', publishedAt: 'published', thumbnail: { default: { url: '' }, high: { url: '' }, medium: { url: '' } }, title: 'title', viewCount: 1,
};

jest.mock('../../context/KeyboardContext', () => ({
  useKeyboardContext: () => ({
    keyboard: () => mockedKeyboard(),
    dispatch: () => mockedDispatch(),
  }),
}));

describe('<Search /> component', () => {
  const component = renderer.create(<VideoCard data={mockVideoItem} position={1} activeItem={1} />);

  const jsonComponent: ReactTestRendererJSON | any = component.toJSON();

  it('should render properly', () => {
    expect(jsonComponent).toMatchSnapshot();
  });

  it('should render container div component', () => {
    const tree = shallow(<VideoCard data={mockVideoItem} position={1} activeItem={1} />).dive();

    expect(tree.exists('div')).toBeTruthy();
  });

  it('should render elements of VideoCard', () => {
    expect(jsonComponent.children).toHaveLength(4);
  });
});
