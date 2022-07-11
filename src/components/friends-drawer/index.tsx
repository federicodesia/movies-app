import { Item, List, StyledDotIndicator, Wrapper, PositionRelative } from "./style"
import { MdAdd } from "react-icons/md"
import { CircleIconButton, CircleImageButton } from "../../styles/circle-button"
import { Row, Column } from "../../styles/styles"
import ActiveIndicator from "../../styles/active-indicator"
import { HoverCard, Tooltip } from "../tooltip"
import { Title, Text } from "../../styles/text"

const FriendsDrawer = () => {
    return <Wrapper>
        <List>
            <Item>
                <Tooltip
                    side='left'
                    text='Add friend'
                    trigger={
                        <CircleIconButton>
                            <MdAdd size={'24px'} />
                        </CircleIconButton>
                    } />
            </Item>

            {
                Array(5).fill({}).map((item, index) => {
                    return <Item key={`${index}`}>

                        <HoverCard
                            side='left'
                            trigger={
                                <PositionRelative>
                                    <CircleImageButton src="https://media.ntslive.co.uk/crop/770x770/1cb9cc79-fcb5-42c1-b0f9-6a427a4332e8_1588204800.jpeg" />
                                    <StyledDotIndicator isActive={index < 3} />
                                </PositionRelative>
                            }
                            content={
                                <Row gap='16px' >
                                    <CircleImageButton src="https://media.ntslive.co.uk/crop/770x770/1cb9cc79-fcb5-42c1-b0f9-6a427a4332e8_1588204800.jpeg" />

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