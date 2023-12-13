import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "store/slice/auth";

export const useAuth = () => {
  const token = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser);

  return { user, token };
};
