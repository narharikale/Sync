import {
    Button,
    chakra,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useColorModeValue,
    Center,
    Box,
    Text
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../slice/authslice';  




const Login = () =>  {

  const authState = useSelector( store => store.auth);
  const { status }  = authState ;
  const dispatch = useDispatch()
  const [ username , setUserName ]  = useState("");
  const [ password  , setPassword ] =  useState("");

  const loginHandler = (e , username , password ) => {
    e.preventDefault()
    dispatch(userLogin({username , password}))
  }


  return (
      <chakra.form 
        onSubmit={(e) => loginHandler(e , username , password)}
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack
          spacing={4}
          w={'full'}
          maxW={'sm'}
          bg={useColorModeValue('white', 'gray.700')}
          rounded={'xl'}
          p={6}
          my={12}
          border='2px solid black' 
          boxShadow='4px 4px 0px #212121'
        >
          <Center lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
            Log in to Sync
          </Center>
          
          {/* <FormControl id="userName" isRequired>    
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="UserName"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl> */}
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
              value={password}
              onChange={ (e) => setPassword(e.target.value)}
            />
          </FormControl>
            <Box 
              display={'flex'}
              justifyContent={'space-between'} >
                  <Text color={'green.400'} >Forgot Password</Text>
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
            </Box>
            <Center>Dont have an account ? <Text color={'green.400'} display={'inline'}  >join Sync </Text> </Center>
        </Stack>
      </chakra.form>
    );
  }

export { Login }