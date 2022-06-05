import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Textarea,
} from '@chakra-ui/react';


function PostEditor () {
   
  return (
    <Box p={5}>
      <Box border={'1px'} borderColor={'gray.300'} borderRadius={'md'}   bg={'white'}>
        <Box size={'lg'} px={'1rem'} py={'.5rem'} >
          <Textarea   
          variant='unstyled'
          resize={'none'} 
          height={'fit-content'}
          placeholder='Create a post....'/>
        </Box>
        <Box bg={'gray.100'} 
          px={'1rem'} 
          py={'.5rem'}
          display={'flex'} 
          justifyContent={'flex-end'}
          gap={5}
          >
          <Menu>
            <MenuButton as={Button}
            variant='outline' 
            size='sm' 
            borderColor={'gray.300'} 
            bg={'white'} > 
              Add Context 
            </MenuButton>
            <MenuList border='2px solid black' boxShadow='4px 4px 0px #212121' p='4' rounded='8px' bg='white' alignItems={'center'}>
              <MenuItem display="flex" gap='6px'> Project</MenuItem>
              <MenuItem display="flex" gap='6px'> Opportunity</MenuItem>
              <MenuItem display="flex" gap='6px'> Url</MenuItem>
            </MenuList>
          </Menu>
          <Button
            bg={'green.400'}
            color={'white'}
            size={'sm'}
            w={'fit-content'}
            alignSelf={'flex-end'}
            _hover={{
                bg: 'green.400',
            }}>
            Share
          </Button>
        </Box>
      </Box>
    </Box>
  )

}

export { PostEditor }