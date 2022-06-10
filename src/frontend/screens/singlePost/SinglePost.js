import {
    Avatar,
    Box,
    Button,
    Input,
    Flex,
    Center,
} from "@chakra-ui/react";
import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CommentCard, PostCard, RightSidebar } from "../../components";
import { addComment } from "../../features/posts/postsSlice";

export const SinglePost = () => {
    const { allPosts } = useSelector((state) => state.posts)
    const { postId } = useParams();
    const { token , user } = useSelector((state) => state.auth)
    const post = allPosts?.find(post => post._id === postId);
    const dispatch = useDispatch();
    const [ commentDetails , setCommentDetails ] = useState({text:''})

    const addCommentHandler = (token , postId , commentData ) => {
        dispatch(addComment({ token, postId, commentData }))
    }

    return (
        <Box w='100%' display={'flex'}>
            <Box flexBasis={'65%'} height={'fit-content'} >
                { post !== undefined ?
                    (<Box>
                        <PostCard post={post} />

                        <Box w={'100%'} py={4} px={8} borderBottom={'1px'} borderColor={'gray.300'}>
                            <Flex direction={'row'} alignItems={'center'} gap={3}  >
                                <Avatar
                                    src={user?.avatarURL}
                                    size='sm'
                                    alt={'Author'}
                                />
                                <Flex grow={1} padding={2} bg='white' border={'1px'} borderColor={'gray.300'} borderRadius={'md'}>
                                    <Input
                                        variant='unstyled'
                                        placeholder="Post your comment here..."
                                        fontSize={'13px'}
                                        value={commentDetails.text}
                                        onChange={ (e) => setCommentDetails({text : e.target.value})}
                                    />
                                    <Button
                                        bg={'blackAlpha.800'}
                                        color={'white'}
                                        size={'sm'}
                                        w={'fit-content'}
                                        alignSelf={'center'}
                                        _hover={{
                                            bg: 'blackAlpha.700',
                                        }}
                                        onClick={(e) => {
                                            addCommentHandler(token , post._id , commentDetails)
                                        }}
                                    >
                                        Post
                                    </Button>
                                </Flex>
                            </Flex>
                        </Box>

                        <Box>
                            { post?.comments?.map((comment , index) => {
                                return (
                                    <CommentCard key={index} comment={ comment }/>
                                )                            
                            })}
                        </Box>  
                    </Box>)
                    : <Center p={3}> This post seems to be deleted</Center>
                }
                              
                
            </Box>
            <Box flexBasis={'35%'} bg={'white'} borderLeft={'1px'} borderRight={'1px'} borderColor={'gray.200'}>
                <RightSidebar />
            </Box>
        </Box>
    )
}

