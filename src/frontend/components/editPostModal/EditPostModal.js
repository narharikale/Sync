import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Textarea,
    chakra,
    
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../features/posts/postsSlice';



function EditPostModal( { isOpen , onClose , post } ) {

  const [postData, setPostData] = useState({content:post?.content});  
  const { token } = useSelector(state => state.auth);
  const dispatch = useDispatch();
 
  const editPostHandler = (token ,postId,postData) => {
 
    dispatch(editPost({token , postId , postData}))
    
  }
  
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent  
            bg={'white'}
            border='2px solid black' 
            boxShadow='4px 4px 0px #212121'
            >
            <ModalHeader>Edit Post </ModalHeader>
            <ModalCloseButton />
            <chakra.form  >
            <ModalBody>
                <Textarea   
                variant='unstyled'
                resize={'none'} 
                height={'fit-content'}
                placeholder='Edit a post....'
                value={postData?.content}
                isRequired
                onChange={(e) => setPostData({content:e.target.value}) }
                />
            </ModalBody>
  
            <ModalFooter>
              <Button  
                mr={3} 
                bg={'green.400'}
                color={'white'}
                w={'fit-content'}
                alignSelf={'flex-end'}
                _hover={{
                bg: 'green.400',
                }}
                onClick = { () => {
                    if(postData.content !== ""){
                        editPostHandler(token ,post._id , postData)
                      
                    }
                  }}
                >
                Save
              </Button>
              <Button onClick={onClose} variant='ghost'> Close </Button>
            </ModalFooter>
            </chakra.form>
          </ModalContent>
        </Modal>
      </>
    )
  }

export { EditPostModal } 