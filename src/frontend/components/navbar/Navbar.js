import { LinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Container,
} from '@chakra-ui/react';
import { LogoutIcon, ProfileIcon, SettingsIcon } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { useNavigate , Link } from 'react-router-dom';
import { MobileNav } from '../sidebar/Sidebar';


function Navbar({onOpen}) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth)
  const logoutHandler = () => {
      dispatch(logout());
      navigate('/login')
  }

  return (
    <>
      <Box px={4} backdropFilter='auto' backdropBlur='8px' bg={'white'} position='sticky' top="0" zIndex={3} borderBottom={'1px'} borderColor={'gray.300'}>
        <Container maxW='1200px'>
        <Flex 
          h={16} 
          alignItems={'center'} 
          justifyContent={'space-between'} >

          <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
          <Box fontSize={'1.5rem'} fontWeight={'bold'} >
            <LinkIcon  color={'green.400'} />  Sync
          </Box>

          <Flex alignItems={'center'}>  
            <Stack direction={'row'} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={user?.avatarURL}
                  />
                </MenuButton>
                <MenuList 
                  border='2px solid black' 
                  boxShadow='4px 4px 0px #212121' 
                  p={'4'} 
                  rounded='8px' 
                  bg='white' 
                  alignItems={'center'}
                >
                  <MenuItem as={ Link } to={`/profile/${user?.username}`} display="flex" gap='6px'> <ProfileIcon /> Profile</MenuItem>
                  <MenuItem display="flex" gap='6px'> <SettingsIcon/> Settings</MenuItem>
                  <MenuDivider />
                  <MenuItem display="flex" gap='6px' color='red.500' onClick={ logoutHandler } > <LogoutIcon/> Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
        </Container>
      </Box>
    </>
  );
}



export { Navbar }