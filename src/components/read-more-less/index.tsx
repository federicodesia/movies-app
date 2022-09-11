import { useEffect, useRef, useState } from "react"
import useElementSize from "../../hooks/use-element-size"
import { Column } from "../../styles/flex"
import { Paragraph } from "../../styles/text"
import { TextWrapper, ToggleText } from "./style"

interface ReadMoreLessProps {
    collapsedHeight: number
    minDifference?: number
    text: string | undefined
}

const ReadMoreLess = ({ collapsedHeight, minDifference = 50, text }: ReadMoreLessProps) => {
    const [isExpanded, setExpanded] = useState(false)
    const toggleExpanded = () => setExpanded(!isExpanded)

    const textRef = useRef<HTMLDivElement>(null)
    const { height } = useElementSize(textRef, text)
    const [isOverflow, setIsOverflow] = useState(false)

    useEffect(() => {
        const dif = height - collapsedHeight
        setIsOverflow(dif > minDifference)
    }, [height]);

    useEffect(() => {
        setExpanded(false)
    }, [text]);

    return <Column gap='16px' alignItems='flex-start'>
        <TextWrapper
            isExpanded={isExpanded}
            isOverflow={isOverflow}
            collapsedHeight={`${collapsedHeight}px`}>

            <Paragraph ref={textRef}>{text}</Paragraph>
        </TextWrapper>

        {
            isOverflow && <ToggleText onClick={toggleExpanded}>
                {
                    isExpanded ? 'Read less...' : 'Read more...'
                }
            </ToggleText>
        }
    </Column>
}

export default ReadMoreLess