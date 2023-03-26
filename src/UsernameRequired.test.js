import { render, screen, fireEvent } from '@testing-library/react';
import UsernameField from './UsernameField';

test('displays error message if username is empty', () => {
  render(<UsernameField />);
  const input = screen.getByLabelText('Username:');
  fireEvent.blur(input);
  const errorMessage = screen.getByTestId('username-error');
  expect(errorMessage).toHaveTextContent('Username is required');
});

test('does not display error message if username is not empty', () => {
  render(<UsernameField />);
  const input = screen.getByLabelText('Username:');
  fireEvent.change(input, { target: { value: 'john.doe' } });
  fireEvent.blur(input);
  const errorMessage = screen.queryByTestId('username-error');
  expect(errorMessage).toBeNull();
});
