
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
  useDisclosure,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { timeFormatter } from '../../utlis/timeFormatter';
import { CommentIcon } from '../icons/Comment';
import { LikeIcon } from '../icons/Like';
import { deletePost, dislikePost, likePost } from '../../features/posts/postsSlice'
import { VerticalmoreIcon } from '../icons/Verticalmore';
import { useNavigate } from 'react-router-dom';
import { EditPostModal } from '../editPostModal/EditPostModal';
import { BookmarkIconSM } from '../icons/BookmarkSM';
import { addToBookmark, deleteFromBookmark } from '../../features/bookmarks/bookmarksSlice';



function PostCard({ post }) {

  const { token, user } = useSelector((state) => state.auth);
  const { bookmarks } = useSelector((state) => state.bookmarks);
  const { firstName, lastName, avatarURL, createdAt, content, likes, username } = post === undefined ? {} : post
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center
      cursor={'pointer'}
      onClick={(e) => {
        e.stopPropagation()
        navigate(`/post/${post._id}`);
      }}>
      <Box
        h='100%'
        w={'full'}
        bg={'white'}
        p={8}
        borderBottom={'1px'}
        borderBottomColor={'gray.200'}
        overflow={'hidden'}
      >

        <Stack direction={'row'} align={'start'} justifyContent={'space-between'} w={'100%'}>
          <Stack direction={'row'} spacing={4} >
            <Avatar
              src={avatarURL}
              alt={'Author'}
            />
            <Box direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>{firstName} {lastName}</Text>
              <Text color={'gray.500'}> {timeFormatter(Date.parse(createdAt))} ago </Text>
              <Box mt={2}>{content}</Box>
              <Flex mt={4} gap={5} alignItems={'center'}>
                <Box 
                >
                  <CommentIcon onClick={(e) => {
                    console.log('clicl')
                    e.stopPropagation();
                    navigate(`/post/${post._id}`);
                  }} />
                </Box>
                <Flex gap={1}>
                  {post?.likes?.likedBy.find((curruser) => user.username === curruser.username) ?
                    <Flex
                      gap={1}
                      onClick={(e) => {
                        e.stopPropagation()
                        dispatch(dislikePost({ token, postId: post._id }))
                      }}>
                      <LikeIcon color='green' /> {likes?.likeCount}
                    </Flex>
                    :
                    <Flex onClick={(e) => {
                      e.stopPropagation()
                      dispatch(likePost({ token, postId: post._id }))
                    }} gap={1}>
                      <LikeIcon /> {likes?.likeCount}
                    </Flex>
                  }
                </Flex>
                {bookmarks.find((currpost) => currpost._id === post._id) ?
                  <Box
                    onClick={(e) => {
                      e.stopPropagation()
                      dispatch(deleteFromBookmark({ token: token, postId: post._id }))
                    }}
                  >
                    <BookmarkIconSM color={'green'} />
                  </Box>
                  : <Box
                    onClick={(e) => {
                      e.stopPropagation()
                      dispatch(addToBookmark({ token: token, postId: post._id }))
                    }}
                  >
                    <BookmarkIconSM color={'black'} />
                  </Box>

                }

              </Flex>
            </Box>
          </Stack>
          {user?.username === username &&
            <Box>
              <Menu>
                <MenuButton
                  as={Button}
                  size='sm'
                  borderColor={'gray.300'}
                  bg={'white'}
                  onClick={(e) => e.stopPropagation(e)}
                >
                  <VerticalmoreIcon />
                </MenuButton>
                <MenuList
                  border='1px solid black'
                  boxShadow='3px 3px 0px #212121'
                  p='4px'
                  rounded='4px'
                  bg='white'
                  alignItems={'center'}>
                  <MenuItem display="flex" gap='2px'
                    onClick={(e) => {
                      e.stopPropagation()
                      onOpen()
                    }}> Edit
                  </MenuItem>
                  <MenuItem
                    display="flex"
                    gap='2px'
                    onClick={(e) => {
                      e.stopPropagation(e)
                      dispatch(deletePost({ token: token, postId: post._id }))
                    }}
                  > Delete</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          }

        </Stack>
      </Box>
      <EditPostModal isOpen={isOpen} onClose={onClose} post={post} />
    </Center>
  );
}



export { PostCard }


