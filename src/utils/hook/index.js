import {useSelector } from "react-redux";
import { selectCurrentToken } from "store/slice/auth";


export const useAuth = ()=>{
  const token = useSelector(selectCurrentToken)

  return !!token
}