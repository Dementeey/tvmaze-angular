export interface AuthData {
  userName: string;
  password: string;
}

export interface RegistrationData {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
  birthday: string;
  phone: string;
  gender: string;
  select: string;
}

export interface FamilyStatus {
  value: string;
  viewValue: string;
}

export interface Data {
  'responseData': object[];
  'dataParsedInArr': array[];
}

export interface AppStatus {
  'successStatus': boolean;
  'pendingStatus': boolean;
  'rejectStatus': boolean;
}

export interface State {
  'data': Data;
  'appStatus': AppStatus;
  'userRequest': string;
};

