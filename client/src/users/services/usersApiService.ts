import axios from "axios";
import UserType, {
  LoginType,
  NormalizedEditUser,
  UserRegistered,
} from "../models/types/userTypes";
import UserInterface from "../models/interfaces/UserInterface";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const login = async (user: LoginType) => {
  try {
    const { data } = await axios.post<string>(`${apiUrl}/users/login`, user);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const signup = async (normalizedUser: UserType) => {
  try {
    const { data } = await axios.post<UserRegistered>(
      `${apiUrl}/users`,
      normalizedUser
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const GetUser = async (userId: string) => {
  try {
    const { data } = await axios.get<UserInterface>(
      `${apiUrl}/users/${userId}`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error))
      return Promise.reject("An unexpected error occurred!");
  }
};

export const editUser = async (normalizedUser: NormalizedEditUser) => {
  try {
    const userToServer = { ...normalizedUser };
    // delete userToServer._id;
    const { data } = await axios.put<UserInterface>(
      `${apiUrl}/users/${normalizedUser._id}`,
      userToServer
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getUsers = async () => {
  try {
    const { data } = await axios.get<UserInterface[]>(`${apiUrl}/users`);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const changeBizStatus = async (userId: string) => {
  try {
    const { data } = await axios.patch<UserInterface>(
      `${apiUrl}/users/${userId}`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const { data } = await axios.delete<UserInterface>(
      `${apiUrl}/users/${userId}`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};
