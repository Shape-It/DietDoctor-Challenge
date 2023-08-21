import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Welcome } from './Welcome';
import { strings } from '@/localization';

jest.mock('react-native-linear-gradient', () => 'LinearGradient');

describe('Welcome component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<Welcome />);

    const loginButton = getByTestId(strings.welcome.login);
    const skipButton = getByTestId(strings.welcome.skip);

    expect(loginButton).toBeDefined();
    expect(skipButton).toBeDefined();
  });

  it('calls handleLogin when Login button is pressed', () => {
    const { getByTestId } = render(<Welcome />);
    const loginButton = getByTestId(strings.welcome.login);

    const mockHandleLogin = jest.fn();
    Welcome.prototype.handleLogin = mockHandleLogin;

    fireEvent.press(loginButton);
    expect(mockHandleLogin).toHaveBeenCalled();
  });

  it('calls handleSkip when Skip button is pressed', () => {
    const { getByTestId } = render(<Welcome />);
    const skipButton = getByTestId(strings.welcome.skip);

    const mockHandleSkip = jest.fn();
    Welcome.prototype.handleSkip = mockHandleSkip;

    fireEvent.press(skipButton);
    expect(mockHandleSkip).toHaveBeenCalled();
  });
});
