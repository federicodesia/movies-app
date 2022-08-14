import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { StyledDropdownContent, StyledArrow} from './style';

interface DropdownMenuProps {
    side: 'left' | 'top' | 'right' | 'bottom'
    align?: 'start' | 'center' | 'end'
    alignOffset?: number
    trigger: React.ReactNode
    content: React.ReactNode
}

export const DropdownMenu = ({ side, align, alignOffset, trigger, content }: DropdownMenuProps) => (
    <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
            {trigger}
        </DropdownMenuPrimitive.Trigger>

        <StyledDropdownContent sideOffset={5} side={side} align={align} alignOffset={alignOffset} >
            <StyledArrow />
            {content}
        </StyledDropdownContent>
    </DropdownMenuPrimitive.Root>
)