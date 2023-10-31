# Zeller Customers React App

A simple and responsive React application that uses GraphQL to manage and display Zeller customers with user type filtering.

## Overview

This project is part of a coding challenge for junior/mid-level frontend developers. The challenge was to build a React app with TypeScript, integrated with GraphQL APIs, for managing and displaying Zeller customers.

## High-Level Requirements

- Build a simple React app with TypeScript to display Zeller customers.
- Fetch customer data using GraphQL APIs provided.
- Filter the list of customers based on the selection of user type (Admin/Manager).
    - When "Admin" is selected, it lists admin customers.
    - When "Manager" is selected, it lists customers with the role "Manager."

## Technologies Used

- React
- GraphQL
- TypeScript
- Styled Components (for styling)
- AWS AppSync (for GraphQL APIs)
- Jest (for testing)

## Project Structure

- `graphql/queries.ts` - GraphQL queries for fetching customer data.
- `tests/` - Unit tests for the application.
- `constants/constants.ts` - Constants used in the project.
- `components/` - React components used in the application.
- `App.tsx` - Main application component.
- `utils/utils.ts` - Utility functions and helpers used throughout the project.

## Testing

The project includes unit tests to ensure code reliability and functionality. You can run the tests using `npm test` or `yarn test`.
