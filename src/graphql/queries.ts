/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getSchedule = /* GraphQL */ `query GetSchedule($id: ID!) {
  getSchedule(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetScheduleQueryVariables,
  APITypes.GetScheduleQuery
>;
export const listSchedules = /* GraphQL */ `query ListSchedules(
  $filter: ModelScheduleFilterInput
  $limit: Int
  $nextToken: String
) {
  listSchedules(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSchedulesQueryVariables,
  APITypes.ListSchedulesQuery
>;
export const schedulesByUserId = /* GraphQL */ `query SchedulesByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelScheduleFilterInput
  $limit: Int
  $nextToken: String
) {
  schedulesByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SchedulesByUserIdQueryVariables,
  APITypes.SchedulesByUserIdQuery
>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
export const getUserProfileByUserId = /* GraphQL */ `query GetUserProfileByUserId(
  $userId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  getUserProfileByUserId(
    userId: $userId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileByUserIdQueryVariables,
  APITypes.GetUserProfileByUserIdQuery
>;
