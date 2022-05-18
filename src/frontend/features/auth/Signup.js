import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    useColorModeValue,
    Center,
    Text
  } from '@chakra-ui/react';
  
 function Signup() {
    return (
      <Flex 
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
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="First Name"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="Last Name" isRequired>    
            <FormLabel>Last name</FormLabel>
            <Input
              placeholder="Last Name"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              placeholder="Password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
            />
          </FormControl>
            <Center>
                <Button
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
      </Flex>
    );
  }

  export { Signup } 