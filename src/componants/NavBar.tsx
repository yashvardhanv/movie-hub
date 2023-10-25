import { HStack, Image, Link } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void,
  searchText: string
}

const NavBar = ({ onSearch, searchText }: Props) => {
  return (
    <HStack justifyContent='space-around' >



      
        <Image src={logo} onClick={()=>onSearch('')} boxSize={20} padding={4} />
     


      <SearchInput onSearch={onSearch} searchText={searchText} />

      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
