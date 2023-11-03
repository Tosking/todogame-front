import { useEffect } from "react";
import { selectCurrentToken, selectCurrentUser } from "store/slice/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRefreshMutation } from "store/slice/auth/authSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "store/slice/auth";
export const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);

  const [refreshToken] = useRefreshMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const loadUser = async () => {
      if (!token && user) {
        const userToken = await refreshToken().unwrap();
        dispatch(setCredentials({ ...userToken }));
        navigate("/main");
      } else return;
    };
    loadUser();
  }, [refreshToken]);

  return !!token;
};
