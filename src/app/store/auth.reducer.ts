import { createReducer, on } from '@ngrx/store';
import { login, logout } from './auth.actions';

const initialUser: IUser = {
  level: null,
  name: null,
  position: null,
};

const initialLoginMagno: IUser = {
  name: 'magno',
  position: 'Web developer',
  level: 1,
};

export const authReducer = createReducer(
  initialUser,
  on(login, (state, { payload }) => {
    if (payload.type === 'magpapalit') {
      return { ...payload.data };
    }
    return state;
  }),
  on(logout, (state) => ({ ...initialUser }))
);

export interface IUser {
  name: string | null;
  position: string | null;
  level: number | null;
}
