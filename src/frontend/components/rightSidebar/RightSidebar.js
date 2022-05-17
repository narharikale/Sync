import { Box , Text , Stack , Avatar } from '@chakra-ui/react'


function RightSidebar() {
  return (
    <Box p={4}>
      <Text
        fontSize={'18px'} 
        borderBottom={'1px'} 
        borderColor={'gray.200'} 
        marginBottom={4} 
        fontWeight={'500'} 
        >
         Recommended People
      </Text>
      
      <Stack 
        direction={'row'} 
        spacing={4} 
        align={'start'} 
        p={2}
        borderRadius={'md'}
        _hover={{
          bg: 'gray.50',
        }}
        >
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Box direction={'column'} spacing={0} fontSize={'sm'} >
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.500'}> Frontend developer | React | NEXT.js |  </Text>
          </Box>
           
        </Stack>
        <Stack 
        direction={'row'} 
        spacing={4} 
        align={'start'} 
        p={2}
        borderRadius={'md'}
        _hover={{
          bg: 'gray.50',
        }}
        >
          <Avatar
            src={'https://avatars.githubusercontent.com/u/810438?v=4'}
            alt={'Author'}
          />
          <Box direction={'column'} spacing={0} fontSize={'sm'} >
            <Text fontWeight={600}>Dan Abramov</Text>
            <Text color={'gray.500'}>Creator | React </Text>
          </Box>
        </Stack>  
    </Box>
  )
}

export { RightSidebar }