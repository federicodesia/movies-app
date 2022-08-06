import { useEffect, RefObject } from 'react';

type Handler = (event: MouseEvent) => void

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    handler: Handler,
    mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): void {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            const el = ref?.current;

            if (!el || el.contains(event.target as Node)) {
                return
            }

            handler(event);
        };

        document.addEventListener(mouseEvent, listener);

        return () => {
            document.removeEventListener(mouseEvent, listener);
        };
    }, [ref, handler]);
};

export default useOnClickOutside