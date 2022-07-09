import { Item, List, ProfileImage, StyledDotIndicator, Wrapper, CenteredColumn } from "./style"
import { MdAdd } from "react-icons/md"
import { CircleIconButton, CircleButton } from "../../styles/circle-button"

const FriendsDrawer = () => {
    return <Wrapper>
        <CenteredColumn>
            <CircleIconButton>
                <MdAdd size={'24px'} />
            </CircleIconButton>
            
            <List>
                {
                    Array(5).fill({}).map((item, index) => {
                        return <Item key={`${index}`}>
                            <CircleButton>
                                <ProfileImage src="https://media.ntslive.co.uk/crop/770x770/1cb9cc79-fcb5-42c1-b0f9-6a427a4332e8_1588204800.jpeg" />
                                <StyledDotIndicator isActive={true} />
                            </CircleButton>
                        </Item>
                    })
                }
            </List>
        </CenteredColumn>
    </Wrapper>
}

export default FriendsDrawer