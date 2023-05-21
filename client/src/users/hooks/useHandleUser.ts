import { useMemo, useState, useCallback } from "react";
import { LoginType, TokenType } from "../models/types/userTypes";
import { useUser } from "../providers/UserProvider";
import useAxiosInterceptors from "../../hooks/useAxiosInterceptors";
import { login } from "../services/usersApiService";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

type ErrorType = null | string;

const useHandleUser = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);

  const { setUser, setToken, user } = useUser();
  useAxiosInterceptors();
  const navigate = useNavigate();

  const requestStatus = (
    loading: boolean,
    errorMessage: ErrorType,
    user: null | TokenType
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setUser(user);
  };

  const handleLogin = useCallback(
    async (user: LoginType) => {
      try {
        setLoading(true);
        const token = await login(user);
        setTokenInLocalStorage(token);
        setToken(token);
        const userFromLocalStorage = getUser();
        requestStatus(false, null, userFromLocalStorage);
        navigate(ROUTES.ROOT);
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null);
      }
    },
    [setToken]
  );

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, []);

  const value = useMemo(() => {
    return { isLoading, error, user };
  }, [isLoading, error, user]);
  return { value, handleLogin, handleLogout };
};

export default useHandleUser;
