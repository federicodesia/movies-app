import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { StyledArrow, StyledContent } from "./style"

interface HoverContentProps {
  delay?: number
  side: 'left' | 'top' | 'right' | 'bottom'
  trigger: React.ReactNode
  content: React.ReactNode
}

const HoverContent = ({ delay = 300, side, trigger, content }: HoverContentProps) => (
  <HoverCardPrimitive.Root openDelay={delay} closeDelay={delay} >
    <HoverCardPrimitive.Trigger asChild>
      {trigger}
    </HoverCardPrimitive.Trigger>

    <StyledContent sideOffset={5} side={side}>
      {content}
      <StyledArrow />
    </StyledContent>
  </HoverCardPrimitive.Root>
);

export default HoverContent;