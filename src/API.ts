/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateScheduleInput = {
  id?: string | null,
  departure: string,
  destination: string,
  passengerCount: number,
  luggageCount: number,
  details?: string | null,
  createdAt?: string | null,
  userId: string,
  userName: string,
  status: ScheduleStatus,
  driverId?: string | null,
  driverName?: string | null,
};

export enum ScheduleStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}


export type ModelScheduleConditionInput = {
  departure?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  passengerCount?: ModelIntInput | null,
  luggageCount?: ModelIntInput | null,
  details?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  userName?: ModelStringInput | null,
  status?: ModelScheduleStatusInput | null,
  driverId?: ModelIDInput | null,
  driverName?: ModelStringInput | null,
  and?: Array< ModelScheduleConditionInput | null > | null,
  or?: Array< ModelScheduleConditionInput | null > | null,
  not?: ModelScheduleConditionInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelScheduleStatusInput = {
  eq?: ScheduleStatus | null,
  ne?: ScheduleStatus | null,
};

export type Schedule = {
  __typename: "Schedule",
  id: string,
  departure: string,
  destination: string,
  passengerCount: number,
  luggageCount: number,
  details?: string | null,
  createdAt: string,
  userId: string,
  userName: string,
  status: ScheduleStatus,
  driverId?: string | null,
  driverName?: string | null,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateScheduleInput = {
  id: string,
  departure?: string | null,
  destination?: string | null,
  passengerCount?: number | null,
  luggageCount?: number | null,
  details?: string | null,
  createdAt?: string | null,
  userId?: string | null,
  userName?: string | null,
  status?: ScheduleStatus | null,
  driverId?: string | null,
  driverName?: string | null,
};

export type DeleteScheduleInput = {
  id: string,
};

export type CreateUserProfileInput = {
  id?: string | null,
  userId: string,
  userType: UserType,
  name: string,
  email: string,
  phoneNumber?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export enum UserType {
  PASSENGER = "PASSENGER",
  DRIVER = "DRIVER",
  ADMIN = "ADMIN",
}


export type ModelUserProfileConditionInput = {
  userId?: ModelIDInput | null,
  userType?: ModelUserTypeInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserProfileConditionInput | null > | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  not?: ModelUserProfileConditionInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserTypeInput = {
  eq?: UserType | null,
  ne?: UserType | null,
};

export type UserProfile = {
  __typename: "UserProfile",
  id: string,
  userId: string,
  userType: UserType,
  name: string,
  email: string,
  phoneNumber?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateUserProfileInput = {
  id: string,
  userId?: string | null,
  userType?: UserType | null,
  name?: string | null,
  email?: string | null,
  phoneNumber?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type ModelScheduleFilterInput = {
  id?: ModelIDInput | null,
  departure?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  passengerCount?: ModelIntInput | null,
  luggageCount?: ModelIntInput | null,
  details?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  userName?: ModelStringInput | null,
  status?: ModelScheduleStatusInput | null,
  driverId?: ModelIDInput | null,
  driverName?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelScheduleFilterInput | null > | null,
  or?: Array< ModelScheduleFilterInput | null > | null,
  not?: ModelScheduleFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelScheduleConnection = {
  __typename: "ModelScheduleConnection",
  items:  Array<Schedule | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelUserProfileFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  userType?: ModelUserTypeInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserProfileFilterInput | null > | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  not?: ModelUserProfileFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionScheduleFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  departure?: ModelSubscriptionStringInput | null,
  destination?: ModelSubscriptionStringInput | null,
  passengerCount?: ModelSubscriptionIntInput | null,
  luggageCount?: ModelSubscriptionIntInput | null,
  details?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionIDInput | null,
  userName?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  driverId?: ModelSubscriptionIDInput | null,
  driverName?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionScheduleFilterInput | null > | null,
  or?: Array< ModelSubscriptionScheduleFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  userType?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateScheduleMutationVariables = {
  input: CreateScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type CreateScheduleMutation = {
  createSchedule?:  {
    __typename: "Schedule",
    id: string,
    departure: string,
    destination: string,
    passengerCount: number,
    luggageCount: number,
    details?: string | null,
    createdAt: string,
    userId: string,
    userName: string,
    status: ScheduleStatus,
    driverId?: string | null,
    driverName?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateScheduleMutationVariables = {
  input: UpdateScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type UpdateScheduleMutation = {
  updateSchedule?:  {
    __typename: "Schedule",
    id: string,
    departure: string,
    destination: string,
    passengerCount: number,
    luggageCount: number,
    details?: string | null,
    createdAt: string,
    userId: string,
    userName: string,
    status: ScheduleStatus,
    driverId?: string | null,
    driverName?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteScheduleMutationVariables = {
  input: DeleteScheduleInput,
  condition?: ModelScheduleConditionInput | null,
};

export type DeleteScheduleMutation = {
  deleteSchedule?:  {
    __typename: "Schedule",
    id: string,
    departure: string,
    destination: string,
    passengerCount: number,
    luggageCount: number,
    details?: string | null,
    createdAt: string,
    userId: string,
    userName: string,
    status: ScheduleStatus,
    driverId?: string | null,
    driverName?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  input: CreateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    userType: UserType,
    name: string,
    email: string,
    phoneNumber?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: UpdateUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    userType: UserType,
    name: string,
    email: string,
    phoneNumber?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: DeleteUserProfileInput,
  condition?: ModelUserProfileConditionInput | null,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    userType: UserType,
    name: string,
    email: string,
    phoneNumber?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetScheduleQueryVariables = {
  id: string,
};

export type GetScheduleQuery = {
  getSchedule?:  {
    __typename: "Schedule",
    id: string,
    departure: string,
    destination: string,
    passengerCount: number,
    luggageCount: number,
    details?: string | null,
    createdAt: string,
    userId: string,
    userName: string,
    status: ScheduleStatus,
    driverId?: string | null,
    driverName?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListSchedulesQueryVariables = {
  filter?: ModelScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSchedulesQuery = {
  listSchedules?:  {
    __typename: "ModelScheduleConnection",
    items:  Array< {
      __typename: "Schedule",
      id: string,
      departure: string,
      destination: string,
      passengerCount: number,
      luggageCount: number,
      details?: string | null,
      createdAt: string,
      userId: string,
      userName: string,
      status: ScheduleStatus,
      driverId?: string | null,
      driverName?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SchedulesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SchedulesByUserIdQuery = {
  schedulesByUserId?:  {
    __typename: "ModelScheduleConnection",
    items:  Array< {
      __typename: "Schedule",
      id: string,
      departure: string,
      destination: string,
      passengerCount: number,
      luggageCount: number,
      details?: string | null,
      createdAt: string,
      userId: string,
      userName: string,
      status: ScheduleStatus,
      driverId?: string | null,
      driverName?: string | null,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    userType: UserType,
    name: string,
    email: string,
    phoneNumber?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      userId: string,
      userType: UserType,
      name: string,
      email: string,
      phoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserProfileByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetUserProfileByUserIdQuery = {
  getUserProfileByUserId?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      id: string,
      userId: string,
      userType: UserType,
      name: string,
      email: string,
      phoneNumber?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionScheduleFilterInput | null,
  owner?: string | null,
};

export type OnCreateScheduleSubscription = {
  onCreateSchedule?:  {
    __typename: "Schedule",
    id: string,
    departure: string,
    destination: string,
    passengerCount: number,
    luggageCount: number,
    details?: string | null,
    createdAt: string,
    userId: string,
    userName: string,
    status: ScheduleStatus,
    driverId?: string | null,
    driverName?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionScheduleFilterInput | null,
  owner?: string | null,
};

export type OnUpdateScheduleSubscription = {
  onUpdateSchedule?:  {
    __typename: "Schedule",
    id: string,
    departure: string,
    destination: string,
    passengerCount: number,
    luggageCount: number,
    details?: string | null,
    createdAt: string,
    userId: string,
    userName: string,
    status: ScheduleStatus,
    driverId?: string | null,
    driverName?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteScheduleSubscriptionVariables = {
  filter?: ModelSubscriptionScheduleFilterInput | null,
  owner?: string | null,
};

export type OnDeleteScheduleSubscription = {
  onDeleteSchedule?:  {
    __typename: "Schedule",
    id: string,
    departure: string,
    destination: string,
    passengerCount: number,
    luggageCount: number,
    details?: string | null,
    createdAt: string,
    userId: string,
    userName: string,
    status: ScheduleStatus,
    driverId?: string | null,
    driverName?: string | null,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    userType: UserType,
    name: string,
    email: string,
    phoneNumber?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    userType: UserType,
    name: string,
    email: string,
    phoneNumber?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    id: string,
    userId: string,
    userType: UserType,
    name: string,
    email: string,
    phoneNumber?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
