import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { REQUEST_EXAMPLE } from './example-constants';
import { ICounterState } from './example-contracts';


const initialState = { data: [], status: null } as ICounterState

export const requestExample = createAction(REQUEST_EXAMPLE);

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    getData(state) {
      state.status = "requesting";
    },
    recievedData(state, action: PayloadAction<object>) {
      state.data = action.payload as object[];
      state.status = "received";
    },
    errorData(state) {
      state.data = [] as object[];
      state.status = "error";
    },
  },
})

export const { getData, recievedData, errorData } = exampleSlice.actions
export default exampleSlice.reducer