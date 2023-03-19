/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCreateCategoryInput = /* GraphQL */ `
  query GetCreateCategoryInput($id: ID!) {
    getCreateCategoryInput(id: $id) {
      id
      username
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCreateCategoryInputs = /* GraphQL */ `
  query ListCreateCategoryInputs(
    $filter: ModelCreateCategoryInputFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCreateCategoryInputs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        category
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
