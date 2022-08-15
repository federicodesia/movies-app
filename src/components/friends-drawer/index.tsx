import { Item, List, StyledDotIndicator, Wrapper, PositionRelative, HoverIconButton, HoverImageButton } from "./style"
import { MdAdd } from "react-icons/md"
import { Row, Column } from "../../styles/styles"
import ActiveIndicator from "../../styles/active-indicator"
import { HoverCard, Tooltip } from "../tooltip"
import { Title, Text } from "../../styles/text"
import { ProfileImg } from "../../styles/profile-image"
import { Img } from "../img"

const profileUrl = 'https://media.ntslive.co.uk/crop/770x770/1cb9cc79-fcb5-42c1-b0f9-6a427a4332e8_1588204800.jpeg'

const FriendsDrawer = () => {
    return <Wrapper>
        <List>
            <Item>
                <Tooltip
                    side='left'
                    text='Add friend'
                    trigger={
                        <HoverIconButton>
                            <MdAdd size={'24px'} />
                        </HoverIconButton>
                    } />
            </Item>

            {
                Array(5).fill({}).map((item, index) => {
                    return <Item key={`${index}`}>

                        <HoverCard
                            side='left'
                            trigger={
                                <PositionRelative>
                                    <HoverImageButton>
                                        <Img src={index < 2 ? profileUrl : undefined} alt='FD' />
                                    </HoverImageButton>
                                    <StyledDotIndicator isActive={index < 3} />
                                </PositionRelative>
                            }
                            content={
                                <Row gap='16px' >
                                    <ProfileImg src={profileUrl} alt='FD' />

                                    <Column gap='4px'>
                                        <Title>Federico De Sía</Title>
                                        <Text>Watching The Forever Purge</Text>
                                    </Column>
                                </Row>
                            } />

                        <ActiveIndicator side='right' isActive={index == 1} />
                    </Item>
                })
            }
        </List>
    </Wrapper>
}

export default FriendsDrawer