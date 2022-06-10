import { LinkIcon } from "@chakra-ui/icons"
import { Box, Text, Button, Link, IconButton, Image , useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostCard } from "../../components"
import { EditModal } from "../../components/editModal/EditModal";
import { followUser, getUserPosts, unfollowUser } from "../../features/user/userSlice";


function Profile() {

    const { username } = useParams();
    const { user , token } = useSelector((state) => state.auth )
    const { allUsers , userPosts } = useSelector( (state) => state.user);
    const { allPosts } = useSelector( (state) => state.posts);
    const currentUser = allUsers.find((user) => user.username === username )
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect( () => {
        dispatch(getUserPosts(username))
    }, [dispatch , username , allPosts])


    return (
        <Box
            w={'100%'}
            borderRight="1px"
            borderRightColor={'gray.200'} >
            <Box
                p={8}
                display={'flex'}
                flexDirection='row' 
                gap={5} 
                justifyContent={'space-between'} 
                bg={'whiteAlpha.600'}
                borderBottom="1px"
                borderBottomColor={'gray.200'}
                >
                <Box display={'flex'} flexDirection={'column'} gap={5}>
                    <Box display={'flex'} flexDirection={'column'} gap={2}>
                        <Box display="flex" alignItems='center' gap={5}>
                            <Text fontSize={32} fontWeight={600} > { currentUser?.firstName} { currentUser?.lastName} </Text>

                            { user?.username === currentUser?.username 
                                ? (<Button variant='outline' onClick={onOpen}  size='sm'>Edit Profile</Button>)
                                :( user?.following.find((user) => user.username === username)
                                ?   (<Button 
                                    variant='outline'
                                    size='sm'
                                    onClick= { () => {
                                       dispatch( unfollowUser({ token:token, followUserId:currentUser?._id }) ) 
                                    }}
                                    >
                                    UnFollow 
                                    </Button>) 
                                :
                                (<Button 
                                    variant='outline'
                                    color={'white'} 
                                    bg={'blackAlpha.800'}
                                    _hover={{
                                    backgroundColor:'blackAlpha.700'
                                    }}
                                    size='sm'
                                    onClick= { () => {
                                        dispatch( followUser({ token:token, followUserId:currentUser?._id }) ) 
                                     }}
                                >
                                    Follow
                                </Button>) 
                                )
                            }
                        </Box>
                        <Text fontSize={20}>
                            {currentUser?.bio}
                        </Text>
                    </Box>

                    <Box align={'flex-end'} display={'flex'} alignItems={'center'} gap={5}>
                        <Text>📍 {currentUser?.city} </Text>
                        <Link href={currentUser?.links} isExternal>
                            <IconButton aria-label='Search database ' borderRadius='50%' icon={<LinkIcon />} />
                        </Link>
                    </Box>
                </Box>
                <Box>
                    <Box w={'10rem'} h={'10rem'}>
                        <Image borderRadius='full' src={ currentUser?.avatarURL } alt='Profile Image' />
                    </Box>
                </Box>
            </Box>
            <Box
             bg={'white'} 
             w={'100%'} 
             p={8} 
             borderBottom={'1px'}
             borderBottomColor={'gray.200'}
             >
                { userPosts &&  userPosts.map( (post , index) => {
                    return <PostCard key={index}  post={ post }/>
                })}
            </Box>
            
            { currentUser &&  <EditModal isOpen={ isOpen } onClose={ onClose } singleUser = { currentUser } /> }
        </Box>
    )
}

export { Profile }