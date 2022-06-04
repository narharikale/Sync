import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useColorModeValue,
    Center,
    Text
  } from '@chakra-ui/react';
import { useState } from 'react';
import { userSignup } from '../slice/authslice';
import { useDispatch } from 'react-redux';

export const Signup = () =>  {

  const [ userdata , setUserdata] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:""
  })

  const  dispatch = useDispatch();

  const userdataHandler = (e) => {
        setUserdata({
          ...userdata,
          [e.target.name] : e.target.value
        })
  }
  
  const signupHandler = (e , userdata ) => {
    e.preventDefault()
    dispatch(userSignup(userdata))
  }

  return (
      <chakra.form 
        onSubmit={ (e) => signupHandler(e, userdata) }
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
            Join Sync
          </Center>
          
          <FormControl id="First Name" isRequired>    
            <FormLabel>First name</FormLabel>
            <Input
              placeholder="First Name"
              name='firstname'
              value={userdata.firstname}
              _placeholder={{ color: 'gray.500' }}
              type="text"
              onChange={ userdataHandler }
            />
          </FormControl>
          <FormControl id="Last Name" isRequired>    
            <FormLabel>Last name</FormLabel>
            <Input
              placeholder="Last Name"
              name='lastname'
              value={ userdata.lastname }
              _placeholder={{ color: 'gray.500' }}
              type="text"
              onChange={ userdataHandler }
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              name='email'
              value={ userdata.email }
              _placeholder={{ color: 'gray.500' }}
              type="email"
              onChange={ userdataHandler }
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Password"
              name = 'password'
              value={ userdata.password }
              _placeholder={{ color: 'gray.500' }}
              type="password"
              onChange={ userdataHandler }
            />
          </FormControl>
            <Center>
                <Button
                type='submit'
                bg={'green.400'}
                color={'white'}
                size={'sm'}
                _hover={{
                    bg: 'green.500',
                }}>
                Join Sync
                </Button>
            </Center>
           <Center>Already have an account ? <Text color={'green.400'} display={'inline'}> Login </Text> </Center>
        </Stack>
      </chakra.form>
    );
  }
