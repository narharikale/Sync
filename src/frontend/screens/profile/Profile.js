import { LinkIcon } from "@chakra-ui/icons"
import { Box, Text, Button, Link, IconButton, Image } from "@chakra-ui/react"
import { PostCard } from "../../components"


function Profile() {
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
                            <Text fontSize={32} fontWeight={600} > Johnrao Doekar </Text>
                            <Button variant='outline' size='sm'>Edit Profile</Button>
                        </Box>
                        <Text fontSize={20}>
                            Frontend developer | React ✨.
                        </Text>
                    </Box>

                    <Box align={'flex-end'} display={'flex'} alignItems={'center'} gap={5}>
                        <Text>📍 Pune, India</Text>
                        <Link href='https://chakra-ui.com' isExternal>
                            <IconButton aria-label='Search database ' borderRadius='50%' icon={<LinkIcon />} />
                        </Link>
                    </Box>
                </Box>
                <Box>
                    <Box w={'10rem'} h={'10rem'}>
                        <Image borderRadius='full' src='https://pbs.twimg.com/profile_images/1521957986335297536/itVSA7l0_400x400.jpg' alt='Dan Abramov' />
                    </Box>
                </Box>

            </Box>
            <Box bg={'white'} w={'100%'} p={8}>
                <PostCard />
                <PostCard />
                <PostCard />
            </Box>
        </Box>
    )
}

export { Profile }