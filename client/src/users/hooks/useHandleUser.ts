import { useMemo, useState, useCallback, useEffect } from "react";
import {
  LoginType,
  RegistrationForm,
  TokenType,
  UserMapToModelType,
} from "../models/types/userTypes";
import { useUser } from "../providers/UserProvider";
import useAxiosInterceptors from "../../hooks/useAxiosInterceptors";
import {
  GetUser,
  changeBizStatus,
  deleteUser,
  editUser,
  getUsers,
  login,
  signup,
} from "../services/usersApiService";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useNavigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import UserInterface from "../models/interfaces/UserInterface";
import normalizeEditUser from "../helpers/normalization/normalizeEditUser";
import { useSnack } from "../../providers/SnackbarProvider";

type ErrorType = null | string;
type UsersType = null | UserInterface[];

const useHandleUser = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<UsersType>(null);
  const [filteredUsers, setFilter] = useState<UsersType>(null);

  const { setUser, setToken, user } = useUser();
  useAxiosInterceptors();
  const navigate = useNavigate();
  const snack = useSnack();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (users) {
      setFilter(
        users.filter(
          (user) =>
            user.name.first.includes(query) || user.name.last.includes(query)
        )
      );
    }
  }, [users, query]);

  const requestStatus = useCallback(
    (
      loading: boolean,
      errorMessage: ErrorType,
      users: UsersType,
      user: null | TokenType | UserInterface
    ) => {
      setLoading(loading);
      setError(errorMessage);
      setUsers(users);
      setUser(user);
    },
    [setUser]
  );

  const handleLogin = useCallback(
    async (user: LoginType) => {
      try {
        setLoading(true);
        const token = await login(user);
        setTokenInLocalStorage(token);
        setToken(token);
        const userFromLocalStorage = getUser();
        requestStatus(false, null, null, userFromLocalStorage);
        navigate(ROUTES.ROOT);
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null, null);
      }
    },
    [navigate, requestStatus, setToken]
  );

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
    navigate(ROUTES.ROOT);
  }, [setUser]);

  const handleSignup = useCallback(
    async (user: RegistrationForm) => {
      try {
        setLoading(true);
        const normalizedUser = normalizeUser(user);
        await signup(normalizedUser);
        await handleLogin({
          email: user.email,
          password: user.password,
        });
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null, null);
      }
    },
    [handleLogin, requestStatus]
  );

  const handleGetUser = useCallback(async (userId: string) => {
    try {
      setLoading(true);
      const user = await GetUser(userId);
      if (user) requestStatus(false, null, null, user);
      return user;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  }, []);

  const handleEditUser = useCallback(
    async (userFromClient: UserMapToModelType) => {
      try {
        setLoading(true);
        const normalizedUser = normalizeEditUser(userFromClient);
        const userFromServer = await editUser(normalizedUser);
        requestStatus(false, null, null, userFromServer);
        snack("success", "The user profile has been successfully updated");
        handleLogout();
        await handleLogin({
          email: normalizedUser.email,
          password: normalizedUser.password,
        });
        navigate(ROUTES.ROOT);
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null, null);
      }
    },
    []
  );

  const handleGetUsers = useCallback(async () => {
    try {
      setLoading(true);
      const users = await getUsers();
      requestStatus(false, null, users, null);
      return users;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  }, []);

  const handleBizUser = useCallback(async (userId: string) => {
    try {
      setLoading(true);
      const user = await changeBizStatus(userId);
      requestStatus(false, null, null, user);
      snack("success", "The user profile has been successfully updated");
      return user;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  }, []);

  const handleDeleteUser = useCallback(async (userId: string) => {
    try {
      setLoading(true);
      await deleteUser(userId);
      snack("success", "The user has been successfully deleted");
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null, null);
    }
  }, []);

  const value = useMemo(() => {
    return { isLoading, error, user, users, filteredUsers };
  }, [isLoading, error, user, filteredUsers, users]);
  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
    handleGetUser,
    handleEditUser,
    handleGetUsers,
    handleBizUser,
    handleDeleteUser,
  };
};

export default useHandleUser;
