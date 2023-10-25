import { Input, InputGroup, InputLeftElement, InputRightAddon, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { BiSearch } from 'react-icons/bi'
import { MdClear } from 'react-icons/md'
import useSearch from '../hooks/useSearch'


interface Props {
    onSearch: (searchText: string) => void,
    searchText: string
}

const SearchInput = ({ onSearch , searchText}: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {movies, error, isLoading} = useSearch(searchText)



    const ref = useRef<HTMLInputElement>(null);
    return (
        <>
            <form onChange={(event)=>{
                if(ref.current) {
                    onSearch(ref.current.value)
                }
            }}
            onSubmit={(event)=>{
                event.preventDefault()
                if(ref.current) {
                    onSearch(ref.current.value)
                    ref.current.value=''
                }

            }}
            >
                <InputGroup>
                    <InputLeftElement children={<BiSearch />} />
                    <Input ref={ref} borderRadius={20} placeholder='Search for Movies and hit Enter to clear' variant={'filled'} />
                   
                    {/* <InputRightAddon borderRightRadius={20} children={<MdClear/>}  /> */}
                </InputGroup>

            </form>
            
        </>

    )
}

export default SearchInput
