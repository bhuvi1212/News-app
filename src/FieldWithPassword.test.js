import { render, fireEvent } from '@testing-library/react';
import FieldWithPassword from './FieldWithPassword';

describe('FieldWithPassword', () => {
  it('renders a form with a field and a password input', () => {
    const { getByLabelText } = render(<FieldWithPassword />);

    expect(getByLabelText('Field:')).toBeInTheDocument();
    expect(getByLabelText('Password:')).toBeInTheDocument();
  });

  it('calls the onSubmit handler when the form is submitted with the correct password', () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<FieldWithPassword onSubmit={handleSubmit} />);

    fireEvent.change(getByLabelText('Field:'), { target: { value: 'Test value' } });
    fireEvent.change(getByLabelText('Password:'), { target: { value: 'secret' } });
    fireEvent.click(getByText('Submit'));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('does not call the onSubmit handler when the form is submitted with an incorrect password', () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(<FieldWithPassword onSubmit={handleSubmit} />);

    fireEvent.change(getByLabelText('Field:'), { target: { value: 'Test value' } });
    fireEvent.change(getByLabelText('Password:'), { target: { value: 'wrong password' } });
    fireEvent.click(getByText('Submit'));

    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
