import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import HomePage from './components/Home/HomePage';
import Navbare from './components/Navbare';
import Addbookadmin from './components/admin/Addbookadmin';
import AdminRoute from './components/admin/AdminRoute';
import BookDetails from './components/Home/BookDetails';
import Panier from './components/Panier';
import UserList from './components/admin/UserList';
import AdminProfile from './components/admin/AdminProfile';

function App() {
	return (
		<div>
			<Navbare />

			<Routes>
				<Route path='/Signup' element={<Signup></Signup>}></Route>
				<Route path='/Login' element={<Login />}></Route>

				<Route
					path='/Profile'
					element={
						<PrivateRoute>
							<Panier/>
						</PrivateRoute>
					}
				></Route>

				<Route path='/' element={<HomePage />}></Route>

				<Route
					path='/admin'
					element={
						<AdminRoute>
							<Addbookadmin />
						</AdminRoute>
					}
				></Route>

<Route
					path='/AdminProfile'
					element={
						<AdminRoute>
							<UserList />
						</AdminRoute>
					}
				></Route> 

				<Route
					path='/BookDetails'
					element={<BookDetails></BookDetails>}
				></Route>

				<Route path='/panier' element={<Panier></Panier>}></Route>
			</Routes>
		</div>
	);
}

export default App;
