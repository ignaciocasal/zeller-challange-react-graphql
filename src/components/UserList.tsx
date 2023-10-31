import {titleCase} from "../utils/utils";
import styled from "styled-components";
import {Customer} from "../App";

const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const CustomerItem = styled.div`
  display: flex;
  align-items: center;
  margin: 18px 0;
  gap: 14px;
`;

const CustomerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: #E4ECF4;
  color: #2B71C7;
  border-radius: 6px;
`;

const CustomerName = styled.div`
    font-size: 16px;
`;

const Role = styled.div`
  font-size: 13px;
  color: #696969;
`;

interface Props {
    selectedUserType: string;
    customersList: Customer[];
    loading: boolean;
}

const UserList = ({ selectedUserType, customersList, loading }: Props) => (
    <div>
        <SectionTitle>{titleCase(selectedUserType)} Users</SectionTitle>
        {loading ? (
            <div>Loading...</div>
        ) : customersList.length > 0 ? (
            customersList.map((customer) => (
                <CustomerItem key={customer.id}>
                    <CustomerIcon>{customer.name[0]}</CustomerIcon>
                    <div>
                        <CustomerName>{customer.name}</CustomerName>
                        <Role>{titleCase(customer.role)}</Role>
                    </div>
                </CustomerItem>
            ))
        ) : (
            <div>No customers available</div>
        )}
    </div>
);

export default UserList