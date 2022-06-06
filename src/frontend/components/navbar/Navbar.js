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
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/slice/authslice';
import { useNavigate , useLocation } from 'react-router-dom';



function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const logoutHandler = () => {
      dispatch(logout());
      navigate('/login')
  }

  return (
    <>
      <Box px={4} backdropFilter='auto' backdropBlur='8px' bg={'white'} position='sticky' top="0" zIndex={3} >
        <Container maxW='1200px'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <Box fontSize={'1.5rem'} fontWeight={'bold'} > <LinkIcon  color={'green.400'} />  Sync</Box>

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
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
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
                  <MenuItem display="flex" gap='6px'> <ProfileIcon /> Profile</MenuItem>
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