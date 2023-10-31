import styled from "styled-components";
import RadioButton from "./RadioButton";
import {USER_TYPES} from "../constants/constants";
import React from "react";

const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;


interface Props {
    selectedUserType: string;
    setSelectedUserType: React.Dispatch<React.SetStateAction<string>>;
}

const UserTypeSelector = ({ selectedUserType, setSelectedUserType }: Props) => (
    <div>
        <SectionTitle>User Types</SectionTitle>
        <RadioGroup>
            <RadioButton
                label="Admin"
                value={USER_TYPES.ADMIN}
                selectedUserType={selectedUserType}
                onChange={() => setSelectedUserType(USER_TYPES.ADMIN)}
                name="userType"
            />
            <RadioButton
                label="Manager"
                value={USER_TYPES.MANAGER}
                selectedUserType={selectedUserType}
                onChange={() => setSelectedUserType(USER_TYPES.MANAGER)}
                name="userType"
            />
        </RadioGroup>
    </div>
)

export default UserTypeSelector