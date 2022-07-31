import { useEffect, useMemo, useState } from 'react'

function useMediaQuery(query: string) {

    const mediaQuery = useMemo(
        () => {
            // Prevents SSR issues
            if (typeof window === 'undefined') return false
            return window.matchMedia(query.replace('@media ', ''))
        },
        [query]
    )

    const getMatches = () => mediaQuery && mediaQuery.matches
    const [matches, setMatches] = useState(getMatches())

    useEffect(() => {
        const handleChange = () => setMatches(getMatches())

        // Triggered at the first client-side load and if query changes
        handleChange()

        // Safari < 14 can't use addEventListener on a MediaQueryList
        if(mediaQuery) {
            if (mediaQuery.addListener) mediaQuery.addListener(handleChange)
            else mediaQuery.addEventListener('change', handleChange)
        }

        return () => {
            if(mediaQuery){
                if (mediaQuery.removeListener) mediaQuery.removeListener(handleChange)
                else mediaQuery.removeEventListener('change', handleChange)
            }
        }
    }, [mediaQuery])

    return matches
}

export default useMediaQuery