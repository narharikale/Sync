import { Routes  , Route } from 'react-router-dom';
import { Home } from "./frontend/screens/home/Home";
import { Profile } from './frontend/screens/profile/Profile';
import { Login } from "./frontend/screens/auth/Login";
import { RequireAuth , PageContainer } from './frontend/components'
import { Signup } from "./frontend/screens/auth/Signup"; 
import { Box } from '@chakra-ui/react';
import { Network } from './frontend/screens/network/Network';
import { BookMark } from './frontend/screens/bookmark/Bookmark';
import { SinglePost } from './frontend/screens/singlePost/SinglePost';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUsers } from './frontend/features/user/userSlice';


function App() {

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getAllUsers()) 
  }, [])


  return (
    <Box bg={'gray.50'} >
      
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
               <Route path='/post/:postId' element=
                { <PageContainer>
                    {<SinglePost/>}
                  </PageContainer>
                }
               />
               <Route path='/network' element=
                { <PageContainer>
                    {<Network/>}
                  </PageContainer>
                }
               />
               <Route path='/bookmark' element=
                { <PageContainer>
                    {<BookMark/>}
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
