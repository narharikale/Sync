import { Box } from '@chakra-ui/react';
import { Navbar } from '../navbar/Navbar';
import { SimpleSidebar } from '../sidebar/Sidebar';

function PageContainer ({children}){
    return (
        <Box >
            <Navbar/>
            <Box display='flex' maxW={'1200px'} margin='auto'>
                <SimpleSidebar/>
                { children }
            </Box>
        </Box>
    )
}

export { PageContainer }