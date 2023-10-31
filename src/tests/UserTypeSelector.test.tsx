import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import UserTypeSelector from '../components/UserTypeSelector';
import {USER_TYPES} from "../constants/constants";

describe('UserTypeSelector', () => {
    it('initially checks the Admin radio button', () => {
        render(<UserTypeSelector selectedUserType={USER_TYPES.ADMIN} setSelectedUserType={() => {}}/>)

        const adminRadioButton = screen.getByLabelText('Admin')
        expect(adminRadioButton).toBeChecked()
    })

    it('updates selectedUserType on radio button click', () => {
        const setSelectedUserType = jest.fn()
        render(<UserTypeSelector selectedUserType={USER_TYPES.ADMIN} setSelectedUserType={setSelectedUserType}/>)

        const managerRadioButton = screen.getByLabelText('Manager')
        fireEvent.click(managerRadioButton)
        expect(setSelectedUserType).toHaveBeenCalledWith(USER_TYPES.MANAGER)
    })

    it('does not update selectedUserType when clicking the same radio button', () => {
        const setSelectedUserType = jest.fn()
        render(<UserTypeSelector selectedUserType={USER_TYPES.ADMIN} setSelectedUserType={setSelectedUserType}/>)

        const adminRadioButton = screen.getByLabelText('Admin')
        fireEvent.click(adminRadioButton)
        expect(setSelectedUserType).not.toHaveBeenCalled()
    })
})

