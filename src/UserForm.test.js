import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm';


test('it shows two inputs and button', () => {

    //* Render the component

    render(<UserForm />)

    //* Manipulate the component
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    //* Assertion
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
})