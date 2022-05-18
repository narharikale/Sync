
import { DragHandleIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { CommentIcon } from '../icons/Comment';
import { LikeIcon } from '../icons/Like';

 function PostCard() {
  return (
    <Center>
      <Box
        h='100%'
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        p={8}
        borderBottom={'1px'}
        borderBottomColor={'gray.200'}
        overflow={'hidden'}>
        
        <Stack direction={'row'} spacing={4} align={'start'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Box direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.500'}> 9 minutes ago</Text>
            <Box mt={2} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dignissimos blanditiis, ducimus saepe ad, delectus fugit animi cum perspiciatis commodi praesentium atque hic quos aliquid molestias? Recusandae odio quaerat sunt! </Box>
            <Flex mt={4} gap={5}> <CommentIcon/>  <LikeIcon/> </Flex>
          </Box>
            <Box>
                <DragHandleIcon/>
            </Box>
        </Stack>    
      </Box>
    </Center>
  );
}

export { PostCard }