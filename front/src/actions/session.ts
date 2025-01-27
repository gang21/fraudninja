import { Credentials, User } from '@shared_types';
import { setToken } from '../redux/slices/sessionSlice';
import ApiSdk from '../api/apiSdk';

export const login = (credentials: Credentials) => async (dispatch: any) => {
  try {
    const api = new ApiSdk();
    const token = await api.loginUser(credentials);
    dispatch(setToken(token));
    return token;
  } catch (error) {
    console.error('Login action failed', error);
    throw error;
  }
};

export const signup = async (user: Omit<User, '_id'>) => {
  try {
    const api = new ApiSdk();
    await api.signupUser(user);
  } catch (error) {
    console.error('Signup action failed', error);
    throw error;
  }
};
