import { ChangeEvent, useEffect, useRef, useState } from "react"
import useDebounce from "../../hooks/use-debounce"
import useOnClickOutside from "../../hooks/use-on-click-outside"
import { useGetGenresQuery, useSearchMovieQuery } from "../../redux/queries/movies-api"
import { imagesService } from "../../services/images-service"
import { Column } from "../../styles/styles"
import { Title, Text } from "../../styles/text"
import { Input, InputWrapper, PosterCard, SearchIcon, Suggestion, SuggestionsWrapper, SuggestionTitle, Wrapper } from "./style"

const SearchBar = () => {
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value, 500)
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const [isOpen, setOpen] = useState(false)
    const tryOpen = () => setOpen(debouncedValue.trim() !== '' && suggestions !== undefined)

    const wrapperRef = useRef(null);
    useOnClickOutside(wrapperRef, () => setOpen(false))

    const inputRef = useRef<HTMLInputElement>(null)
    const handleInputWrapperClick = () => {
        inputRef.current?.focus()
        tryOpen()
    }

    const genres = useGetGenresQuery().data?.genres ?? []
    const suggestions = useSearchMovieQuery(debouncedValue, {
        skip: debouncedValue.trim() === ''
    }).data?.results

    useEffect(() => {
        tryOpen()
    }, [debouncedValue, suggestions])

    return <Wrapper ref={wrapperRef}>
        <InputWrapper onClick={handleInputWrapperClick}>
            <SearchIcon />
            <Input
                ref={inputRef}
                placeholder='Search movies...'
                value={value}
                onChange={handleChange} />
        </InputWrapper>

        {
            isOpen && suggestions && <SuggestionsWrapper>
                {
                    <Column gap='8px'>
                        <SuggestionTitle>
                            {
                                suggestions.length === 0
                                    ? 'No results found'
                                    : suggestions.length === 1
                                        ? '1 result found'
                                        : `${suggestions.length} results found`
                            }
                        </SuggestionTitle>

                        {
                            suggestions.length > 0 && <ul>
                                {
                                    suggestions.map((movie, index) => {
                                        return <Suggestion key={`${movie.id} ${index}`} to={`/movie/${movie.id}`}>
                                            <PosterCard src={imagesService.getPosterUrl(movie.poster_path)} />
                                            <Column gap='2px'>
                                                <Title maxLines={1}>{movie.title} </Title>
                                                <Text maxLines={1}>
                                                    {
                                                        movie.genre_ids?.slice(0, 2)
                                                            .map(id => genres.find(g => g.id === id)?.name)
                                                            .filter(e => e !== undefined)
                                                            .join(', ')
                                                    }
                                                </Text>
                                            </Column>
                                        </Suggestion>
                                    })
                                }
                            </ul>
                        }
                    </Column>
                }
            </SuggestionsWrapper>
        }
    </Wrapper>
}

export default SearchBar