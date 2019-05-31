import { EUserActions, UserActions } from '../actions/user.actions';
import { initialUserState, IUserState } from '../state/user.state';
import { stat } from 'fs';

export const userReducers = (
	state = initialUserState,
	action: UserActions
) => {
	switch(action.type){
		case EUserActions.GetUsersSuccess: {
			return {
				...state,
				users: action.payload
			}
		}
		case EUserActions.GetUserSuccess: {
			return {
				...state,
				selectedUser: action.payload
			}
		}
		default: 
			return state
	}
}
