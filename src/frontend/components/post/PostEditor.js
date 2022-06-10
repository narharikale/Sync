import {
  Box,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../features/posts/postsSlice';


function PostEditor () {
   
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth)
  const [ postData , setPostData ] = useState({content:""})

  const creatrPostHandler = (token , postData ) => {
    dispatch(createPost({token , postData}))
    setPostData({content:""});
  }

  return (
    <Box p={5}>
      <Box border={'1px'} borderColor={'gray.300'} borderRadius={'md'} bg={'white'}>
        <Box size={'lg'} px={'1rem'} py={'.5rem'} >
          <Textarea   
          variant='unstyled'
          resize={'none'} 
          height={'fit-content'}
          placeholder='Create a post....'
          value={postData.content}
          isRequired
          onChange={(e) => setPostData({content:e.target.value}) }
          />
        </Box>
        <Box bg={'gray.100'} 
          px={'1rem'} 
          py={'.5rem'}
          display={'flex'} 
          justifyContent={'flex-end'}
          gap={5}
          >
          <Button
            bg={'green.400'}
            color={'white'}
            size={'sm'}
            w={'fit-content'}
            alignSelf={'flex-end'}
            _hover={{
                bg: 'green.400',
            }}
            type="submit"
            onClick = { (e) => {
              if(postData.content !== ""){
                creatrPostHandler(token , postData)
              }
            }}
            >
            Share
          </Button>
        </Box>
      </Box>
    </Box>
  )

}

export { PostEditor }