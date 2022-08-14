import { StyledSwitch, StyledThumb } from './style';

interface SwitchProps {
    checked: boolean
}

export const Switch = ({ checked }: SwitchProps) => (
    <StyledSwitch checked={checked}>
        <StyledThumb />
    </StyledSwitch>
)