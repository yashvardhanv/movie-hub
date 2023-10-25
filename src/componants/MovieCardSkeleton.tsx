import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'


const MovieCardSkeleton = () => {
  return (
    <Card borderRadius={20} overflow='hidden'>
        <Skeleton height='400px'/> 
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
  )
}

export default MovieCardSkeleton
