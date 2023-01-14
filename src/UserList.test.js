import { render, screen } from '@testing-library/react'
import UserList from './UserList';


test('render the correct number of rows', () => {
    
    // * render the component
    const users = [
        { name: 'jane', email: 'jane@jane.com'},
        { name: 'sam', email: 'sam@sam.com'},
    ]

    render(<UserList users={users}/>)

    // * find all the rows in the table
    //screen.logTestingPlaygroundURL();

    const rows= screen.getAllByRole('row')

    // * assertion
    expect(rows).toHaveLength(2);
})


test('render the email and name of each user', () => {

})