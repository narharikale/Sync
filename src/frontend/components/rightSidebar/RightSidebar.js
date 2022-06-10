import { Box , Text , Stack , Avatar , Button} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { sortPosts } from '../../features/posts/postsSlice';



function RightSidebar() {

  const { allUsers } = useSelector( (state) => state.user );
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <Box p={4}>
          { location.pathname === '/network' || location.pathname === '/bookmark' ? 
            <Box display={'flex'} justifyContent={'space-between'} py={3}>
              <Button as={Button}
              variant='outline' 
              size='sm' 
              borderColor={'gray.300'}
              _hover={
                {
                  backgroundColor:'green.300',
                  color:'white'
                }
              } 
              onClick={() => dispatch(sortPosts("latest"))}
              bg={'white'} > 
                Get Latest Post 🚀
              </Button>

              <Button as={Button}
              variant='outline' 
              size='sm' 
              borderColor={'gray.300'}
              _hover={
                {
                  backgroundColor:'green.300',
                  color:'white'
                }
              } 
              bg={'white'} 
              onClick={() => dispatch(sortPosts("trending"))}
              > 
                Show Trending 🔥
              </Button>
            </Box> : " "

          }
            

      <Text
        fontSize={'18px'} 
        borderBottom={'1px'} 
        borderColor={'gray.200'} 
        marginBottom={4} 
        fontWeight={'500'} 
        >
         Recommended People
      </Text>
      { allUsers.slice(0 ,4).map((user , index) => {
        
        return (
            <Stack 
            key={index}
            direction={'row'} 
            spacing={4} 
            align={'start'} 
            p={2}
            borderRadius={'md'}
            _hover={{
              bg: 'gray.50',
            }}
            >
              <Avatar
                src={user?.avatarURL}
                alt={'Author'}
              />
              <Box direction={'column'} spacing={0} fontSize={'sm'} >
                  <Text
                   _hover={{ textDecoration: "underline" , color:'green.400' }} 
                    as={Link} to={`/profile/${user?.username}`} 
                    fontWeight={600}>{ user?.firstName } { user?.lastName }
                  </Text>
                <Text color={'gray.500'}> { user?.bio } </Text>
              </Box>
            </Stack>
        )
      })}
    </Box>
  )
}

export { RightSidebar }