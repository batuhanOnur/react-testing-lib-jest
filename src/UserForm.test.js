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

test('it calls onUserAdd when the from submitted',() => {

    //* mock func
    const mock = jest.fn();

    //* Render the component
    render(<UserForm onUserAdd={mock}/>)
     
    //* Manipulate the component
    const [nameInput, emailInput] = screen.getAllByRole('textbox');

    //* Simulate typing
    user.click(nameInput)
    user.keyboard('jane')

    user.click(emailInput)
    user.keyboard('jane@jane.com')

    //* Find button
    const button = screen.getByRole('button');

    //* Simulate button
    user.click(button)

    //* Assertion to make sure 'onUserAdd' called with email/name
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({
        name: 'jane',
        email: 'jane@jane.com'
    })
    
})