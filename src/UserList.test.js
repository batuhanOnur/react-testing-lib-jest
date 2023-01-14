import { render, screen,within } from '@testing-library/react'
import UserList from './UserList';


test('render the correct number of rows', () => {
    
    // * render the component
    const users = [
        { name: 'jane', email: 'jane@jane.com'},
        { name: 'sam', email: 'sam@sam.com'},
    ]

    const { container } = render(<UserList users={users}/>) // html elements inside container

    // * find all the rows in the table
    // screen.logTestingPlaygroundURL();

    const rows = within(screen.getByTestId('users')).getAllByRole('row')

    // eslint-disable-next-line
    //const rows = container.querySelectorAll('tbody tr')


    // * assertion
    expect(rows).toHaveLength(2);
})


test('render the email and name of each user', () => {

})