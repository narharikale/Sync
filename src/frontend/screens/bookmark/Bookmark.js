import { Box, Center } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { PostCard , RightSidebar } from "../../components";

export const BookMark = () => {

    const { bookmarks } = useSelector((state) => state.bookmarks)

    return (
        <Box w='100%' display={'flex'}>
                <Box flexBasis={'65%'}>
                    { bookmarks.length >0 ? bookmarks.map((post , index ) => {
                        return <PostCard key={index} post={ post }/>
                     }):
                     <Center p={4}>No bookmarks yet</Center> 
                    }
                </Box>
                <Box flexBasis={'35%'} bg={'white'} borderLeft={'1px'} borderRight={'1px'} borderColor={'gray.200'}>
                 <RightSidebar/>
                </Box> 
        </Box>
    )
}

