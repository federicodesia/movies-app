import clamp from "../../utils/clamp"
import { Background, Indicator } from "./style"

interface ProgressBarProps {
    percentage: number
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
    return <Background>
        <Indicator percentage={clamp(percentage, 0, 100)} />
    </Background>
}

export default ProgressBar