import React from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
} from '@chakra-ui/react';

import { HomeIcon ,  UsersIcon , ProfileIcon , BookmarkIcon , SearchIcon} from '..';
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';



function SimpleSidebar({ isOpen , onClose , children }) {
  
  return (
    <Box minH="100vh">
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      
      <Box ml={{ base: 0, md: 60 }} >
        {children}
      </Box>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {

  const user = useSelector((state) => state.auth.user);

  const LinkItems = [
    { name: 'Profile', icon: ProfileIcon  , path:`/profile/${user?.username}`},
    { name: 'Home', icon: HomeIcon  , path:'/'},
    { name: 'Network', icon: UsersIcon , path:'/network' },
    { name: 'BookMark', icon: BookmarkIcon, path:'/bookmark' },
    
  ];

  return (
    <Box
      
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest} paddingTop={4}>
      <Flex alignItems="center" justifyContent="space-between">
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem path={link.path} key={link.name} icon={link.icon} marginTop={2} >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};


const NavItem = ({ icon, children, path , ...rest}) => {
  return (
    <Link 
    as={ NavLink }
    to={path}
    style={{ textDecoration: 'none' }}
     _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="2"
        mx="4"
        borderRadius="4px"
        gap={3}
        fontWeight='600'
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'gray.100',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<SearchIcon />}
      />
    </Flex>
  );
};

export { SimpleSidebar , MobileNav}