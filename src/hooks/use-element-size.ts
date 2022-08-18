import { RefObject, useCallback, useEffect, useState } from 'react'

interface Size {
    width: number
    height: number
}

function useElementSize<T extends HTMLElement = HTMLDivElement>(
    ref: RefObject<T>,
    dependency?: any
) {
    const [size, setSize] = useState<Size>({
        width: 0,
        height: 0,
    })

    const { current } = ref
    const handleSize = useCallback(() => {
        setSize({
            width: current?.clientWidth || 0,
            height: current?.clientHeight || 0,
        })
    }, [current?.clientHeight, current?.clientWidth])

    useEffect(() => {
        handleSize()

        window.addEventListener('resize', handleSize);
        return () => window.removeEventListener('resize', handleSize);
    }, [ref, handleSize, dependency]);

    return size
}

export default useElementSize