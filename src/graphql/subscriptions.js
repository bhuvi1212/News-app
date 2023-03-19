/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCreateCategoryInput = /* GraphQL */ `
  subscription OnCreateCreateCategoryInput(
    $filter: ModelSubscriptionCreateCategoryInputFilterInput
    $owner: String
  ) {
    onCreateCreateCategoryInput(filter: $filter, owner: $owner) {
      id
      username
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateCreateCategoryInput = /* GraphQL */ `
  subscription OnUpdateCreateCategoryInput(
    $filter: ModelSubscriptionCreateCategoryInputFilterInput
    $owner: String
  ) {
    onUpdateCreateCategoryInput(filter: $filter, owner: $owner) {
      id
      username
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteCreateCategoryInput = /* GraphQL */ `
  subscription OnDeleteCreateCategoryInput(
    $filter: ModelSubscriptionCreateCategoryInputFilterInput
    $owner: String
  ) {
    onDeleteCreateCategoryInput(filter: $filter, owner: $owner) {
      id
      username
      category
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
