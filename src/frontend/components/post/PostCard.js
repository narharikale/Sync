
import {
  Box,
  Center,
  Text,
  Stack,
  Avatar,
  Flex,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { timeFormatter } from '../../utlis/timeFormatter';
import { CommentIcon } from '../icons/Comment';
import { LikeIcon } from '../icons/Like';
import { VerticalmoreIcon } from '../icons/Verticalmore';




function PostCard( { post } ) {

  const { firstName , lastName , avatarURL , createdAt , content , likes } = post === undefined ? {} : post

  return (
    <Center>
      <Box
        h='100%'
        w={'full'}
        bg={'white'}
        p={8}
        borderBottom={'1px'}
        borderBottomColor={'gray.200'}
        overflow={'hidden'}>
        
        <Stack direction={'row'}  align={'start'} justifyContent={'space-between'} w={'100%'}>
          <Stack direction={'row'} spacing={4} >
            <Avatar
              src={avatarURL}
              alt={'Author'}
            />
            <Box direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>{firstName} {lastName}</Text>
              <Text color={'gray.500'}> { timeFormatter(Date.parse(createdAt)) } ago </Text>
              <Box mt={2}>{ content }</Box>
              <Flex mt={4} gap={5}> 
                <CommentIcon/>  
                <Flex gap={1}>
                  <LikeIcon/> {likes?.likeCount}
                </Flex> 
              </Flex>
            </Box>
          </Stack>
          <Box>
            <Menu>
              <MenuButton 
              as={Button}
              size='sm' 
              borderColor={'gray.300'} 
              bg={'white'} 
              > 
              <VerticalmoreIcon/> 
              </MenuButton>
              <MenuList border='1px solid black' boxShadow='3px 3px 0px #212121' p='4px' rounded='4px' bg='white' alignItems={'center'}>
                <MenuItem display="flex" gap='2px'> Edit</MenuItem>
                <MenuItem display="flex" gap='2px'> Delete</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Stack>    
      </Box>
    </Center>
  );
}

export { PostCard }