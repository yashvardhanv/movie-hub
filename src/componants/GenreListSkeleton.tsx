import { HStack, ListItem, SkeletonCircle, SkeletonText, useColorModeValue } from '@chakra-ui/react'

const GenreListSkeleton = () => {

    const bg = useColorModeValue('white', 'gray.700')
  return (
    
        <ListItem borderRadius={8} bg={bg} overflow={'hidden'} boxShadow={'md'} >
            <HStack>
            <SkeletonCircle height={10}></SkeletonCircle>
            <SkeletonText skeletonHeight={10} noOfLines={1}></SkeletonText>
            </HStack>
        </ListItem>
    
  )
}

export default GenreListSkeleton
