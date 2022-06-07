import { Toast } from "./frontend/components";
import { Routes  , Route } from 'react-router-dom';
import { Home } from "./frontend/screens/home/Home";
import { Profile } from './frontend/screens/profile/Profile';
import { Login } from "./frontend/screens/auth/Login";
import { RequireAuth , PageContainer } from './frontend/components'
import { Signup } from "./frontend/screens/auth/Signup"; 
import { Box } from '@chakra-ui/react';


function App() {

  return (
    <Box bg={'gray.50'} >
      <Toast />
      <Routes>
            <Route>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Route>

            <Route element = { <RequireAuth/> }>
              <Route path='/' element=
                { <PageContainer>
                    {<Home/>}
                  </PageContainer>
                }
               />
              <Route path='/profile/:username' element=
                { <PageContainer>
                    {<Profile/>}
                  </PageContainer>
                }
               />
            </Route>

        </Routes>
    </Box>  
  );
}

export default App;
