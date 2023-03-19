/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCreateCategoryInput = /* GraphQL */ `
  mutation CreateCreateCategoryInput(
    $input: CreateCreateCategoryInputInput!
    $condition: ModelCreateCategoryInputConditionInput
  ) {
    createCreateCategoryInput(input: $input, condition: $condition) {
      id
      username
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCreateCategoryInput = /* GraphQL */ `
  mutation UpdateCreateCategoryInput(
    $input: UpdateCreateCategoryInputInput!
    $condition: ModelCreateCategoryInputConditionInput
  ) {
    updateCreateCategoryInput(input: $input, condition: $condition) {
      id
      username
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCreateCategoryInput = /* GraphQL */ `
  mutation DeleteCreateCategoryInput(
    $input: DeleteCreateCategoryInputInput!
    $condition: ModelCreateCategoryInputConditionInput
  ) {
    deleteCreateCategoryInput(input: $input, condition: $condition) {
      id
      username
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
