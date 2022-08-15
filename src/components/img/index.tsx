import { useEffect, useMemo, useState } from "react"
import { Wrapper, Fallback, StyledImage, AltText } from "./style"

type ImgStatus = 'loading' | 'loaded' | 'error'
type AltType = 'default' | 'initials'

export interface ImgProps {
    className?: string
    src?: string | null
    alt?: string | null
    altType?: AltType
}

export const Img = ({ className, src, alt, altType = 'default' }: ImgProps) => {
    const status = useImage(src)

    const altText = useMemo(() => {
        if (!alt) return
        if (altType === 'initials') {
            return alt
                .split(' ')
                .map(w => w[0])
                .slice(0, 2)
                .join('')
                .toUpperCase()
        }
        return alt
    }, [alt, altType])

    return <Wrapper className={className} >
        {
            status === 'loaded'
                ? <StyledImage src={src ?? undefined} />
                : <Fallback>
                    {
                        status === 'error' && altText && <AltText>{altText}</AltText>
                    }
                </Fallback>
        }
    </Wrapper>
}

export const useImage = (src?: string | null) => {
    const [status, setStatus] = useState<ImgStatus>('loading')

    useEffect(() => {
        if (!src) {
            setStatus('error')
            return
        }

        setStatus('loading')
        const image = new window.Image()
        image.onload = () => setStatus('loaded')
        image.onerror = () => setStatus('error')
        image.src = src
    }, [src])

    return status
}