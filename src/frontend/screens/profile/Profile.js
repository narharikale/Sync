import { LinkIcon } from "@chakra-ui/icons"
import { Box, Text, Button, Link, IconButton, Image , useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCard } from "../../components"
import { EditModal } from "../../components/editModal/EditModal";
import { getSingleUser, getUserPosts } from "../../features/user/userSlice";


function Profile() {

    const currentUser = useSelector( (state) => state.auth.user);
    const { singleUser , userPosts } = useSelector( (state) => state.user);
    const username = currentUser?.username
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect( () => {
        dispatch(getSingleUser(username))
        dispatch(getUserPosts(username))
    }, [dispatch , currentUser])

   

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
                            <Text fontSize={32} fontWeight={600} > { singleUser?.firstName} { singleUser?.lastName} </Text>

                            <Button variant='outline' onClick={onOpen}  size='sm'>Edit Profile</Button>
                        </Box>
                        <Text fontSize={20}>
                            {singleUser?.bio}
                        </Text>
                    </Box>

                    <Box align={'flex-end'} display={'flex'} alignItems={'center'} gap={5}>
                        <Text>📍 {singleUser?.city} </Text>
                        <Link href={singleUser?.links} isExternal>
                            <IconButton aria-label='Search database ' borderRadius='50%' icon={<LinkIcon />} />
                        </Link>
                    </Box>
                </Box>
                <Box>
                    <Box w={'10rem'} h={'10rem'}>
                        <Image borderRadius='full' src={ singleUser?.avatarURL } alt='Profile Image' />
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
                { userPosts.map( (post , index) => {
                    return <PostCard key={index}  post={ post }/>

                })}
               
            </Box>
            
            { singleUser &&  <EditModal isOpen={ isOpen } onClose={ onClose } singleUser = { singleUser } /> }
        </Box>
    )
}

export { Profile }