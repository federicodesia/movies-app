import { RefObject, useEffect, useState } from 'react'

function useHover<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>
) {
    const [isHover, setIsHover] = useState(false)
    const handleMouseEnter = () => setIsHover(true)
    const handleMouseLeave = () => setIsHover(false)

    useEffect(() => {
        const { current } = ref
        if (!current) return

        current.addEventListener('mouseenter', handleMouseEnter);
        current.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            current.removeEventListener('mouseenter', handleMouseEnter);
            current.removeEventListener('mouseleave', handleMouseLeave);
        }
    }, [ref.current]);

    return isHover
}

export default useHover