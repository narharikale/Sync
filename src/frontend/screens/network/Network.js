import { Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { PostCard , RightSidebar } from "../../components";
import { sortPosts } from "../../utlis/sortPosts";
export const Network = () => {
    
    const { allPosts  , sortBy } = useSelector((state) => state.posts)

    const postData = sortPosts(sortBy, allPosts);

    return (
        <Box w='100%'display={'flex'} flexDirection={{base:'column', sm:'column-reverse' , lg:'row'}} >
                <Box flexBasis={'65%'}>
                    { allPosts && postData.map((post , index ) => {
                        return <PostCard key={index} post={ post }/>
                    })}
                </Box>
                <Box 
                 flexBasis={'35%'}
                 bg={'white'} 
                 borderLeft={'1px'} 
                 borderBottom={'1px'}
                 padding={1}
                 borderRight={'1px'} 
                 borderColor={'gray.200'}
                >
                 <RightSidebar/>
                </Box> 
        </Box>
    )
}

