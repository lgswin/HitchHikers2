/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateSchedule = /* GraphQL */ `subscription OnCreateSchedule(
  $filter: ModelSubscriptionScheduleFilterInput
  $owner: String
) {
  onCreateSchedule(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateScheduleSubscriptionVariables,
  APITypes.OnCreateScheduleSubscription
>;
export const onUpdateSchedule = /* GraphQL */ `subscription OnUpdateSchedule(
  $filter: ModelSubscriptionScheduleFilterInput
  $owner: String
) {
  onUpdateSchedule(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateScheduleSubscriptionVariables,
  APITypes.OnUpdateScheduleSubscription
>;
export const onDeleteSchedule = /* GraphQL */ `subscription OnDeleteSchedule(
  $filter: ModelSubscriptionScheduleFilterInput
  $owner: String
) {
  onDeleteSchedule(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteScheduleSubscriptionVariables,
  APITypes.OnDeleteScheduleSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onCreateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onUpdateUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $owner: String
) {
  onDeleteUserProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
