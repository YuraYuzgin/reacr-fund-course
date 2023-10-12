import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes';
import Posts from '../pages/Posts';
import Login from '../pages/Login';
import { useContext } from 'react';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
	const { isAuth, isLoading } = useContext(AuthContext);

	if (isLoading === true) {
		return <Loader />;
	}
	return isAuth ? (
		<Routes>
			{privateRoutes.map((route) => (
				<Route
					element={route.component}
					path={route.path}
					exact={route.exact}
					key={route.path}
				/>
			))}
			<Route path="*" element={<Posts />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map((route) => (
				<Route
					element={route.component}
					path={route.path}
					exact={route.exact}
					key={route.path}
				/>
			))}
			<Route path="*" element={<Login />} />
		</Routes>
	);
};

export default AppRouter;
