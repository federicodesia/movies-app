import { useEffect, useState } from 'react'

function useMediaQuery(query: string) {

    const getMatches = (query: string) => {
        // Prevents SSR issues
        if (typeof window === 'undefined') return false
        return window.matchMedia(query).matches
    }

    const [matches, setMatches] = useState(getMatches(query))
    const handleChange = () => setMatches(getMatches(query))

    useEffect(() => {
        const matchMedia = window.matchMedia(query)

        // Triggered at the first client-side load and if query changes
        handleChange()

        // Safari < 14 can't use addEventListener on a MediaQueryList
        if (matchMedia.addListener) matchMedia.addListener(handleChange)
        else matchMedia.addEventListener('change', handleChange)

        return () => {
            if (matchMedia.removeListener) matchMedia.removeListener(handleChange)
            else matchMedia.removeEventListener('change', handleChange)
        }
    }, [query])

    return matches
}

export default useMediaQuery