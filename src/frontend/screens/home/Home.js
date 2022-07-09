import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { PostEditor , PostCard , RightSidebar } from "../../components";
import { useDispatch , useSelector } from "react-redux";
import { getAllPosts } from "../../features/posts/postsSlice";


export const Home = () => {

    const dispatch = useDispatch();
     
    const { allPosts } = useSelector( (state) => state.posts );
    
    const newpost = []
    
    for(let i=allPosts?.length-1 ; i >= 0 ; i--){
        newpost.push(allPosts[i])
    }

    useEffect( () => {
        dispatch(getAllPosts());
    } , [dispatch])


    return (
        <Box w='100%' display={'flex'} flexDirection={{base:'column' , lg:'row'}} >
                <Box flexBasis={'65%'}>
                    <PostEditor/>
                    { allPosts && newpost?.map( (post , index ) => {
                        return <PostCard key={index}  post={ post }/>
                    })
                    }
                </Box>
                <Box  flexBasis={'35%'} bg={'white'} borderLeft={'1px'} borderRight={'1px'} borderColor={'gray.200'}>
                 <RightSidebar/>
                </Box> 
            </Box>
    )
}

