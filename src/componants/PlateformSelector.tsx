import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BiSolidChevronDown } from 'react-icons/bi'
export interface Item{
    value: string | null,
    name : string | null
}

interface Props{
    list : Item[],
    selectedFilter: Item |null,
    onSelectFilter: (filter : Item) => void,
}
const PlateformSelector = ({list,selectedFilter,onSelectFilter}:Props) => {
  return (
    <Menu >
        <MenuButton ml={10} mb={0} as={Button} rightIcon={<BiSolidChevronDown/>} >
            {selectedFilter?.name || "Sort By"}
        </MenuButton>
        <MenuList>
            {list.map(li => <MenuItem onClick={() => onSelectFilter(li)} key={li.name}>{li != null ? li.name: "Default"}</MenuItem>)}
        </MenuList>
    </Menu>
  )
}

export default PlateformSelector
