import { Box  , useDisclosure } from '@chakra-ui/react';
import { Navbar } from '../navbar/Navbar';
import { SimpleSidebar } from '../sidebar/Sidebar';

function PageContainer ({children}){

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box >
            <Navbar onOpen={onOpen}/>
            <Box display='flex' maxW={'1200px'} margin='auto'>
                <SimpleSidebar  isOpen={isOpen}  onClose={onClose}/>
                { children }
            </Box>
        </Box>
    )
}

export { PageContainer }