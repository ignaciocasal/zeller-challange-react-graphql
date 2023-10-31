import React, {useEffect, useState} from 'react';
import {API, graphqlOperation} from "aws-amplify";
import {ListZellerCustomers} from "./graphql/queries";
import styled from "styled-components";
import UserTypeSelector from "./components/UserTypeSelector";
import UserList from "./components/UserList";
import {USER_TYPES} from "./constants/constants";

const SectionContainer = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #cbcbcb;
`;

export interface Customer {
    id: string;
    name: string;
    role: string;
    email?: string;
}

const App = () => {
    const [customersList, setCustomersList] = useState<Customer[]>([])
    const [selectedUserType, setSelectedUserType] = useState<string>(USER_TYPES.ADMIN)
    const [loading, setLoading] = useState<boolean>(false)

    // fetch customers when App is mounted
    useEffect(() => {
        fetchZellerCustomers()
    }, [])

    async function fetchZellerCustomers() {
        setLoading(true);
        try {
            const customersListData = await API.graphql(graphqlOperation(ListZellerCustomers));
            // @ts-ignore
            const customersList = customersListData.data.listZellerCustomers.items;
            setCustomersList(customersList);
        } catch (err) {
            console.log('Error fetching Zeller customers', err);
        } finally {
            setLoading(false);
        }
    }

    // filter customers based on selected user type
    const filteredCustomers = customersList.filter((customer) => {
        return customer.role.toLowerCase() === selectedUserType;
    })

    return (
        <div>
            <SectionContainer>
                <UserTypeSelector selectedUserType={selectedUserType} setSelectedUserType={setSelectedUserType}/>
            </SectionContainer>
            <SectionContainer>
                <UserList selectedUserType={selectedUserType} customersList={filteredCustomers} loading={loading}/>
            </SectionContainer>
        </div>
    )
};

export default App;
