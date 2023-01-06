import { createAction, props } from '@ngrx/store';
import { IUser } from './auth.reducer';

export const login = createAction(
  'login-action',
  props<{ payload: { type: 'magpapalit' | 'hindi'; data: IUser } }>()
);
export const logout = createAction('logout-action');
