import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Protect = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo ? <Outlet /> : <Navigate to="/login" />;
};

export default Protect;
