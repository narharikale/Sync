import {
    Button,
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
  
function Login() {
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
            Log in to Sync
          </Center>
          
          <FormControl id="userName" isRequired>    
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="UserName"
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
              placeholder="password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
            />
          </FormControl>
            <Box display={'flex'} justifyContent={'space-between'} >
                <Text color={'green.400'} >Forgot Password</Text>
                <Button
                bg={'green.400'}
                color={'white'}
                size={'sm'}
                w={'20%'}
                alignSelf={'flex-end'}
                _hover={{
                    bg: 'green.400',
                }}>
                Log in
                </Button>
            </Box>
            <Center>Dont have an account ? <Text color={'green.400'} display={'inline'}  >join Sync </Text> </Center>
        </Stack>
      </Flex>
    );
  }

export { Login }