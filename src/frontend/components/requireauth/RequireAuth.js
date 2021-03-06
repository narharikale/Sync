import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth() {
	const token = useSelector((state) => state.auth.token);
	const location = useLocation();
	return token ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);
}

export { RequireAuth };