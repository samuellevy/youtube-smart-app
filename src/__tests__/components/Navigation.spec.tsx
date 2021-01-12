import React from 'react';
// import renderer, { ReactTestRendererJSON } from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import Navigation from '../../components/Navigation';
import { KeyboardProvider } from '../../context/KeyboardContext';
import Home from '../../pages/Home';
import KeyboardHandle from '../../components/KeyboardHandle';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockedHistoryPush,
  }),
}));

describe('<Navigation /> component', () => {
  // it('should be render Navigation', () => {
  //   const { debug } = render(<KeyboardProvider><Navigation /></KeyboardProvider>);
  //   debug();
  // });

  it('should be go to /search', () => {
    const { container, getByTestId } = render(
      <KeyboardProvider>
        <KeyboardHandle />
        <Navigation />
      </KeyboardProvider>,
    );

    fireEvent.keyDown(getByTestId('navigation'), {
      key: 'ArrowDown',
      code: 'ArrowDown',
      keyCode: 40,
      charCode: 40,
    });

    fireEvent.keyDown(document.body, {
      key: 'ArrowDown',
      code: 'ArrowDown',
      keyCode: 40,
      charCode: 40,
    });

    expect(mockedHistoryPush).toHaveBeenCalled();
  });
});
