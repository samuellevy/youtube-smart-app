import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import {
  render, fireEvent, wait, waitFor,
} from '@testing-library/react';

import { KeyboardProvider } from '../../context/KeyboardContext';
import Home from '../../pages/Home';
import KeyboardHandle from '../../components/KeyboardHandle';
import { FavoritesProvider } from '../../context/FavoriteContext';

import Navigation from '../../components/Navigation';
import { Item } from '../../components/Navigation/styles';

Enzyme.configure({ adapter: new Adapter() });

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockedHistoryPush,
  }),
}));

describe('<Navigation /> component', () => {
  it('should be render Navigation', () => {
    const { debug } = render(<KeyboardProvider><Navigation /></KeyboardProvider>);
    // debug();
  });

  it('renders three <Item /> components', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find(Item)).toHaveLength(3);
  });

  it('should be go to /search as default', async () => {
    const { container, getByTestId } = render(
      <KeyboardProvider>
        <FavoritesProvider>
          <KeyboardHandle />
          <Navigation />
          <Home />
        </FavoritesProvider>
      </KeyboardProvider>,
    );

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/search');
    });
  });
});
