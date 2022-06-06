import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useColorModeValue,
    Center,
    Box,
    Text,
    useToast,
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from '../slice/authslice'; 
import { Link , useLocation , useNavigate} from 'react-router-dom';



const Login = () =>  {
  const dispatch = useDispatch();
  const toast = useToast();
  const [ username , setUserName ]  = useState("");
  const [ password  , setPassword ] =  useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const loginHandler = async(username , password ) => {
    const response = await dispatch(userLogin({username , password}))
      response?.payload?.encodedToken 
        ? toast({
        title: 'Loged In.',
        description: "You are now Successfully loged in ",
        status: 'success',
        duration: 4000,
        isClosable: true,
        }) : toast({
        title: 'Error',
        description: "Something went wrong",
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
      navigate(from , { replace:true })
  }


  return (
    <Center h='100vh' >
      <chakra.form 
        onSubmit={(e) =>{
          e.preventDefault()
          loginHandler(username , password)}
        }
        minW='23rem'    
        >
        <Stack
          spacing={4}
          w={'full'}
          maxW={'sm'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          p={6}
          border='2px solid black' 
          boxShadow='4px 4px 0px #212121'
        >
          <Center lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Log in to Sync
          </Center>
          <FormControl id="userName" isRequired>
            <FormLabel>User Name</FormLabel>
            <Input
              placeholder="Username"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              value={username}
              onChange={ (e) => setUserName(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
              value={ password }
              onChange={ (e) => setPassword(e.target.value)}
            />
          </FormControl>
            <Box 
              display={'flex'}
              justifyContent={'space-between'} >
              {/* <Text color={'green.400'} >Forgot Password</Text> */}
              <Button
              bg={'green.400'}
              color={'white'}
              size={'sm'}
              w={'20%'}
              alignSelf={'flex-end'}
              _hover={{
                  bg: 'green.400',
              }}
              type='submit'
              >
              Log in
              </Button>
              <Button
              variant='outline'
              color={'green.400'}
              size={'sm'}
              alignSelf={'flex-end'}
              type='submit'
              onClick = { () =>  loginHandler("adarshbalika" , "adarshBalika123")}
              >
              Guest Login
              </Button>
            </Box>
            <Center>Dont have an account ? 
              <Text as ={ Link } to='/signup' color={'green.400'} display={'inline'} >
                join Sync 
              </Text> 
            </Center>
        </Stack>
      </chakra.form>
      </Center>
    );
  }

export { Login }