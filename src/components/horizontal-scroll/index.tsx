import { ReactNode, useEffect, useRef, useState } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import useElementSize from "../../hooks/use-element-size"
import useHover from "../../hooks/use-hover"
import { LeftArrowWrapper, RightArrowWrapper, ArrowButton, Wrapper, ScrolleableArea } from "./style"

interface HorizontalScrollProps {
    children: ReactNode | ReactNode[]
}

const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const isHover = useHover(wrapperRef)
    const size = useElementSize(wrapperRef)

    const scrollRef = useRef<HTMLDivElement>(null)
    const [isAtStart, setAtStart] = useState(false)
    const [isAtEnd, setAtEnd] = useState(false)

    const updatePosition = () => {
        const { current } = scrollRef
        if (!current) return

        const { scrollWidth, clientWidth, scrollLeft } = current
        setAtStart(scrollLeft === 0)
        setAtEnd(scrollLeft + clientWidth === scrollWidth)
    };

    useEffect(() => {
        updatePosition()
    }, [children, size.width])

    const scroll = (direction: 'left' | 'right') => {
        const { current } = scrollRef
        if (!current) return

        const { clientWidth, scrollLeft } = current
        const amount = clientWidth * 0.65
        current.scrollTo({
            left: direction === 'left'
                ? scrollLeft - amount
                : scrollLeft + amount,
            behavior: "smooth"
        });
    }

    return <Wrapper ref={wrapperRef}>
        {
            <LeftArrowWrapper isVisible={!isAtStart && isHover} >
                <ArrowButton onClick={() => scroll('left')}>
                    <BsChevronLeft />
                </ArrowButton>
            </LeftArrowWrapper>
        }

        <ScrolleableArea ref={scrollRef} onScroll={updatePosition} >
            {children}
        </ScrolleableArea>

        {
            <RightArrowWrapper isVisible={!isAtEnd && isHover} >
                <ArrowButton onClick={() => scroll('right')}>
                    <BsChevronRight />
                </ArrowButton>
            </RightArrowWrapper>
        }
    </Wrapper>
}

export default HorizontalScroll