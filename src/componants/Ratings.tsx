import { Badge } from '@chakra-ui/react';
interface Props{
    ratings: number;
}
const Ratings = ({ratings}: Props) => {
    const color = ratings > 7.5 ? 'green' : ratings > 6 ? 'yellow': ratings > 4 ? 'red' : '';
  return (
    <Badge colorScheme={color} fontSize={18} paddingX={2} borderRadius={6}>
        {ratings}
    </Badge>
  )
}

export default Ratings
