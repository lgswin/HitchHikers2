/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createSchedule = /* GraphQL */ `mutation CreateSchedule(
  $input: CreateScheduleInput!
  $condition: ModelScheduleConditionInput
) {
  createSchedule(input: $input, condition: $condition) {
    id
    departure
    destination
    passengerCount
    luggageCount
    details
    createdAt
    userId
    userName
    status
    driverId
    driverName
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateScheduleMutationVariables,
  APITypes.CreateScheduleMutation
>;
export const updateSchedule = /* GraphQL */ `mutation UpdateSchedule(
  $input: UpdateScheduleInput!
  $condition: ModelScheduleConditionInput
) {
  updateSchedule(input: $input, condition: $condition) {
    id
    departure
    destination
    passengerCount
    luggageCount
    details
    createdAt
    userId
    userName
    status
    driverId
    driverName
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateScheduleMutationVariables,
  APITypes.UpdateScheduleMutation
>;
export const deleteSchedule = /* GraphQL */ `mutation DeleteSchedule(
  $input: DeleteScheduleInput!
  $condition: ModelScheduleConditionInput
) {
  deleteSchedule(input: $input, condition: $condition) {
    id
    departure
    destination
    passengerCount
    luggageCount
    details
    createdAt
    userId
    userName
    status
    driverId
    driverName
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteScheduleMutationVariables,
  APITypes.DeleteScheduleMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $input: CreateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  createUserProfile(input: $input, condition: $condition) {
    id
    userId
    userType
    name
    email
    phoneNumber
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $input: UpdateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  updateUserProfile(input: $input, condition: $condition) {
    id
    userId
    userType
    name
    email
    phoneNumber
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $input: DeleteUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  deleteUserProfile(input: $input, condition: $condition) {
    id
    userId
    userType
    name
    email
    phoneNumber
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
