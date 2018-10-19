import { Action } from '@ngrx/store';
// import * as filmAction from '../actions/';

import {State} from '../models';

export const initialState: State = {
  data: {
    responseData: [],
    dataParsedInArr: []
  },
  appStatus: {
  successStatus: false,
  pendingStatus: false,
  rejectStatus: false
  },
  userRequest: 'Grils'
};
