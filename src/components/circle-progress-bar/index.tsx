import { useMemo } from "react"
import { Wrapper, Background, Circle, Progress, ProgressLabel } from "./style"

interface CircleProgressBarProps {
    progress: number
    maxProgress: number
    size?: number
    thickness?: number
    showLabel?: boolean
    prefix?: string
    decimals?: number
}

const CircleProgressBar = ({
    progress,
    maxProgress,
    size = 48,
    thickness = 4,
    showLabel = true,
    prefix = '',
    decimals = 1
}: CircleProgressBarProps) => {

    const props = useMemo(() => {
        const c = size / 2
        const r = c - (thickness / 2)

        const dasharray = 2 * Math.PI * r
        const dashoffset = ((maxProgress - progress) * dasharray) / maxProgress

        return {
            cx: c,
            cy: c,
            r: r,
            dasharray: dasharray,
            dashoffset: dashoffset
        }
    }, [size, thickness, progress, maxProgress]);

    return <Wrapper size={`${size}px`}>
        <Circle thickness={`${thickness}px`}>
            <Background {...props} />
            <Progress {...props} />
        </Circle>

        {
            showLabel && <ProgressLabel>
                {`${progress.toFixed(decimals)}${prefix}`}
            </ProgressLabel>
        }
    </Wrapper>
}

export default CircleProgressBar