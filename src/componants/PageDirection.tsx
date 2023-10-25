import { Button, HStack, IconButton, useColorModeValue } from '@chakra-ui/react'
import {AiOutlineStop} from 'react-icons/ai'
import { GrNext, GrPrevious } from 'react-icons/gr'
interface Props{
page: number,
changePage : (page:number) => void
}

const PageDirection = ({page, changePage}:Props) => {
  const bg = useColorModeValue('blue', 'teal')
  return (
    <HStack>
        <IconButton  spinner={<AiOutlineStop/>} isLoading={page==1?true:false} colorScheme={bg} fontSize='20px' onClick={() => changePage(page-1)}  aria-label='Prev-page' icon={<GrPrevious  />}  ></IconButton>
        <Button  colorScheme={bg}>{page}</Button>
        <IconButton colorScheme={bg} fontSize='20px'   onClick={() => changePage(page+1)}       aria-label='Next-page' icon={<GrNext />}  ></IconButton>
    </HStack>
  )
}

export default PageDirection
