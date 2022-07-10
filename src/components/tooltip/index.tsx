import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { Title } from '../../styles/styles';
import { StyledArrow, StyledHoverCardContent, StyledTooltipContent } from './style';

const delayDuration = 100

interface Props {
    side: 'left' | 'top' | 'right' | 'bottom'
    trigger: React.ReactNode
}

interface TooltipProps extends Props { text: string }
export const Tooltip = ({ side, trigger, text }: TooltipProps) => (
    <TooltipPrimitive.Root
        delayDuration={delayDuration}
        disableHoverableContent={true} >

        <TooltipPrimitive.Trigger asChild>
            {trigger}
        </TooltipPrimitive.Trigger>

        <StyledTooltipContent sideOffset={5} side={side}>
            <Title>{text}</Title>
            <StyledArrow />
        </StyledTooltipContent>
    </TooltipPrimitive.Root>
)

interface HoverCardProps extends Props { content: React.ReactNode }
export const HoverCard = ({ side, trigger, content }: HoverCardProps) => (
    <TooltipPrimitive.Root
        delayDuration={delayDuration}
        disableHoverableContent={false} >

        <TooltipPrimitive.Trigger asChild>
            {trigger}
        </TooltipPrimitive.Trigger>

        <StyledHoverCardContent sideOffset={5} side={side}>
            {content}
            <StyledArrow />
        </StyledHoverCardContent>
    </TooltipPrimitive.Root>
)