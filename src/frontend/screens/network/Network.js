import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PostCard , RightSidebar } from "../../components";
import { sortPosts } from "../../utlis/sortPosts";
export const Network = () => {
    
    const { allPosts  , sortBy } = useSelector((state) => state.posts)

    const postData = sortPosts(sortBy, allPosts);

    return (
        <Box w='100%' display={'flex'}>
                <Box flexBasis={'65%'}>
                    { allPosts && postData.map((post , index ) => {
                        return <PostCard key={index} post={ post }/>
                    })}
                </Box>
                <Box flexBasis={'35%'} bg={'white'} borderLeft={'1px'} borderRight={'1px'} borderColor={'gray.200'}>
                 <RightSidebar/>
                </Box> 
        </Box>
    )
}

