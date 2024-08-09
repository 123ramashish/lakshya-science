import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
export default function OnlyTeacherRoute() {
  const { user } = useSelector((state) => state.education);
  return user && user.teacher ? <Outlet /> : <Navigate to="/signin" />;
}
