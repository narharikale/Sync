import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    chakra,
    
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../features/user/userSlice';



function EditModal( { isOpen , onClose , singleUser } ) {

  console.log(singleUser , " single")
  const [userDetails, setUserDetails] = useState(singleUser);  
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch()
  const userDetailChangeHandler = (e) => {
      setUserDetails({
            ...userDetails,
            [e.target.name]:e.target.value
      });
     
  } 
 
  const updateUserHandler = (token , updatedUserData) => {
      dispatch(updateUser({token , updatedUserData}));
      onClose();
  } 
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent  
            bg={'white'}
            border='2px solid black' 
            boxShadow='4px 4px 0px #212121'
            >
            <ModalHeader>Update Profile</ModalHeader>
            <ModalCloseButton />
            <chakra.form onSubmit={ (e) => {
              e.preventDefault()
              updateUserHandler(token , userDetails)
            }} >
            <ModalBody>
                <Box>
                <Stack spacing={4}>
                    <HStack>
                    <Box>
                        <FormControl id="firstName" 
                        isReadOnly>
                        <FormLabel>First Name</FormLabel>
                        <Input 
                        type="text" 
                        name='firstName'
                        
                        defaultValue={singleUser?.firstName}
                        onChange={ userDetailChangeHandler }/>
                        </FormControl>
                    </Box>
                    <Box>
                        <FormControl id="lastName"
                          isReadOnly>
                        <FormLabel>Last Name</FormLabel>
                        <Input
                           type="text" 
                           name='lastName'
                           defaultValue={singleUser?.lastName}
                           onChange={ userDetailChangeHandler }/>
                        </FormControl>
                    </Box>
                    </HStack>
                    <FormControl id="link" >
                        <FormLabel>Link</FormLabel>
                        <Input 
                        type="text" 
                        name='links'
                        defaultValue={singleUser?.links}
                        onChange={ userDetailChangeHandler }/>
                    </FormControl>
                    <FormControl id="bio" >
                        <FormLabel>Bio</FormLabel>
                        <InputGroup>
                            <Input 
                            type={'text'} 
                            name='bio'
                            defaultValue={singleUser?.bio} 
                            onChange={ userDetailChangeHandler }/>
                            <InputRightElement h={'full'}>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </Stack>
                </Box>
            </ModalBody>
  
            <ModalFooter>
              <Button  
                mr={3} 
                bg={'green.400'}
                color={'white'}
                w={'fit-content'}
                alignSelf={'flex-end'}
                _hover={{
                bg: 'green.400',
                }}
                type={'submit'}
                >
                Save
              </Button>
              <Button onClick={onClose} variant='ghost'> Close </Button>
            </ModalFooter>
            </chakra.form>
          </ModalContent>
        </Modal>
      </>
    )
  }

export { EditModal } 