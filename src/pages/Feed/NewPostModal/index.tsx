
import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay, CloseButton } from './styles'
import { MdClose } from "react-icons/md";
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from './styles';

const PostCreationFormSchema = z.object({
  title : z.string(),
  content : z.string(),
  author : z.object({
    role : z.string(),
    userImgUrl : z.string(),
    username : z.string()
  })
})
export type PostCreationType = z.infer<typeof PostCreationFormSchema>
export const NewPostModal = () => {

  const formProps = useForm<PostCreationType>()

  const { 
    register, 
    handleSubmit, 
    formState : { isSubmitting }
  } = formProps

  const handleCreateNewPost = async (data : PostCreationType ) =>{
    console.log(data)
    await new Promise(resolver => setTimeout(resolver, 1000))
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <MdClose size ={26} />
        </CloseButton>
        <Dialog.Title>
          <h1>Criar Post</h1>
        </Dialog.Title>
        <Form onSubmit={handleSubmit(handleCreateNewPost)}>
          <input 
          type="text" 
            placeholder='Dê um título'
            {...register('title')}
            />
          <textarea
            placeholder='Comece a escrever a partir daqui...'
            {...register('content')}
          >
          </textarea>
          <input 
            type="submit" 
            value='Enviar'
            disabled = {isSubmitting}
          />
        </Form>
      </Content>
    </Dialog.Portal>
  )
}