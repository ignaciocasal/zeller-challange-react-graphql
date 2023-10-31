import React from 'react';
import { render, screen } from '@testing-library/react';
import UserList from "../components/UserList";

const customersList = [
    {
        id: 'f47813cf-0482-4326-afc9-12f53218ed06',
        name: 'Lynn Warr',
        role: 'MANAGER',
    },
    {
        id: '73bae2af-4fa4-4023-8829-1034604e7590',
        name: 'David Miller',
        role: 'ADMIN',
    },
];

describe('UserList', () => {
    it('renders the section title with the selected user type', () => {
        render(
            <UserList selectedUserType="admin" customersList={customersList} loading={false} />
        );

        const sectionTitle = screen.getByText('Admin Users')
        expect(sectionTitle).toBeInTheDocument();
    })

    it('renders loading text when loading', () => {
        render(<UserList selectedUserType="admin" customersList={[]} loading={true} />)

        const loadingText = screen.getByText('Loading...')
        expect(loadingText).toBeInTheDocument()
    })

    it('renders customer names', () => {
        render(<UserList selectedUserType="admin" customersList={customersList} loading={false} />);

        const lynnName = screen.getByText('Lynn Warr')
        const davidName = screen.getByText('David Miller')

        expect(lynnName).toBeInTheDocument()
        expect(davidName).toBeInTheDocument()
    })

    it('renders customer roles', () => {
        render(<UserList selectedUserType="admin" customersList={customersList} loading={false} />)

        const lynnRole = screen.getByText('Manager')
        const davidRole = screen.getByText('Admin')

        expect(lynnRole).toBeInTheDocument()
        expect(davidRole).toBeInTheDocument()
    })

    it('displays a message when no customers are available', () => {
        render(<UserList selectedUserType="admin" customersList={[]} loading={false} />);

        const noCustomersMessage = screen.getByText('No customers available')
        expect(noCustomersMessage).toBeInTheDocument()
    })
})
