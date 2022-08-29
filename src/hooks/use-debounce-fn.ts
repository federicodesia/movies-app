import { useState } from 'react'

function useDebounceFn<T>(
    fn: () => T,
    interval?: number
) {
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

    const debounceFn = () => {
        if (timer) clearTimeout(timer)

        const newTimer = setTimeout(() => {
            fn()
            setTimer(null)
        }, interval || 300)

        setTimer(newTimer)
    }

    return debounceFn
}

export default useDebounceFn