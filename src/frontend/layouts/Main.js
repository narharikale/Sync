import { Box } from "@chakra-ui/react"
import { PostCard, PostEditor, RightSidebar} from "../components"


function Main () {
        return (
            <Box  w='100%' display={'flex'} >
                <Box flexBasis={'65%'}>
                    <PostEditor/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                    <PostCard/>
                </Box>
                <Box flexBasis={'35%'} bg={'white'} borderLeft={'1px'} borderRight={'1px'} borderColor={'gray.200'}>
                 <RightSidebar/>
                </Box>
            </Box>
        )
}

export  { Main }