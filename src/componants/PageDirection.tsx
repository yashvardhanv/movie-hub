import { Button, HStack, IconButton, useColorModeValue } from '@chakra-ui/react'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'
interface Props{
page: number,
changePage : (page:number) => void
}

const PageDirection = ({page, changePage}:Props) => {
  const bg = useColorModeValue('teal', 'teal')
  return (
    <HStack>
        <IconButton colorScheme={bg} fontSize='20px' onClick={() => changePage(page-1)}   aria-label='Prev-page' icon={<GrLinkPrevious />}  ></IconButton>
        <Button colorScheme={bg}>{page}</Button>
        <IconButton fontSize='20px' colorScheme={bg}  onClick={() => changePage(page+1)}       aria-label='Next-page' icon={<GrLinkNext />}  ></IconButton>
    </HStack>
  )
}

export default PageDirection
