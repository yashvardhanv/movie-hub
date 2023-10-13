import { Input, InputGroup, InputLeftElement, useDisclosure } from '@chakra-ui/react'
import { useRef } from 'react'
import { BiSearch } from 'react-icons/bi'
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
                    ref.current.value=''
                }

            }}
            >
                <InputGroup>
                    <InputLeftElement children={<BiSearch />} />
                    <Input ref={ref} borderRadius={20} placeholder='Search Movies...' variant={'filled'} />
                </InputGroup>

            </form>
            
        </>

    )
}

export default SearchInput
