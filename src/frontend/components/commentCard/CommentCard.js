import {
    Avatar,
    Box,
    Button,
    Input,
    Flex,
    Stack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { PostCard, RightSidebar, VerticalmoreIcon } from "../../components";


const CommentCard = ({ comment }) => {

    return (
        <Box
        h={'fit-content'}
        w={'full'}
        bg={'white'}
        p={8}
        borderBottom={'1px'}
        borderBottomColor={'gray.200'}
        overflow={'hidden'}
        >
        <Stack direction={'row'} align={'start'} justifyContent={'space-between'} w={'100%'}>
            <Stack direction={'row'} spacing={4} >
                <Avatar
                    src={ comment?.avatarURL }
                    size='sm'
                    alt={'Author'}
                />
                <Box direction={'column'} spacing={0} fontSize={'sm'}>
                    <Text fontWeight={600}>{comment?.firstName} {comment?.lastName}</Text>
                    <Box mt={2}>{comment?.text}</Box>  
                </Box>
            </Stack>
            
        </Stack>
    </Box>
    )
}

export { CommentCard }