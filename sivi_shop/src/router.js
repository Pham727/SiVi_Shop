import HomePage from './pages/users/homePage';
import ProfilePage from './pages/users/profilePage'
import { ROUTERS } from './utils/router';
import {Routes, Route} from 'react-router-dom';
import MasterLayout from './pages/users/theme/masterLayout';

const renderRouterCustom = () => {
    const userRouters = [
            {
                path: ROUTERS.USER.HOME,
                component: <HomePage />
            },
            {
                path: ROUTERS.USER.PROFILE,
                component: <ProfilePage />
            }
        ]

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) =>(
                    <Route key={key} path={item.path} element={item.component}/>
                ))}
            </Routes>
        </MasterLayout>
    )
}
const RouterCustom = () => {
    return renderRouterCustom();
}

export default RouterCustom;