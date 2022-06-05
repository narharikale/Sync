import { Routes  , Route } from 'react-router-dom';
import { Home } from "../screens/home/Home";
import { Login } from "../features/auth/view/Login";
import { Profile } from '../components'
import { Signup } from "../features/auth/view/Signup";

function Main () {


    return (
        <div>
            <Routes>
                <Route path='/' element = { <Home/> }/>
                <Route path='/login' element = { <Login/> }/>
                <Route path='/signup' element = { <Signup/> }/>
                <Route path='/profile' element = { <Profile/> }/>
                
            </Routes>
        </div>
    )
}

export  { Main }