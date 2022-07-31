import { Wrapper, HeaderWrapper, List, Item, ListTitle, StyledLink, StyledLinkText, ItemIconWrapper } from "./style";

import { HiOutlineHome, HiOutlineLogout } from "react-icons/hi"
import { TbHeart, TbCalendarMinus, TbUser, TbUsers, TbSettings } from "react-icons/tb"
import { useMatch, useResolvedPath } from "react-router-dom";
import { IconContext } from "react-icons";
import ActiveIndicator from "../../styles/active-indicator";
import { Header } from "../../styles/text";
import useMediaQuery from "../../hooks/use-media-query";
import { down } from "../../styles/breakpoints";
import { Row } from "../../styles/styles";

interface StyledListProps {
    title: string,
    items: StyledItemProps[]
}

interface StyledItemProps {
    to: string
    icon: JSX.Element
    text: string
}

const StyledList = ({ title, items }: StyledListProps) => <div>
    <ListTitle>{title} </ListTitle>
    <List>
        {
            items.map((item, index) => {
                return <StyledItem
                    key={`${title} ${item.text} ${index}`}
                    {...item}
                />
            })
        }
    </List>
</div>

const StyledItem = ({ to, icon, text }: StyledItemProps) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    const isActive = match !== null

    return (
        <Item>
            <ActiveIndicator side='left' isActive={isActive} />
            <StyledLink to={to} $isActive={isActive}>
                <ItemIconWrapper>
                    {icon}
                </ItemIconWrapper>
                <StyledLinkText maxLines={1}>{text} </StyledLinkText>
            </StyledLink>
        </Item>
    );
}

function SideDrawer() {
    const collapsed = useMediaQuery(down('xxl'))

    return <IconContext.Provider value={{ size: '18px' }}>
        <Wrapper>
            <HeaderWrapper>
                {
                    collapsed
                        ? <Row justifyContent='center'>
                            <Header>M</Header>
                            <Header variant='light'>A</Header>
                        </Row>
                        : <Row>
                            <Header>MOVIES</Header>
                            <Header variant='light'>APP</Header>
                        </Row>
                }
            </HeaderWrapper>

            <StyledList title='Menu' items={[
                {
                    icon: <HiOutlineHome />,
                    text: 'Browse',
                    to: '/'
                },
                {
                    icon: <TbHeart />,
                    text: 'Watchlist',
                    to: '/watchlist'
                },
                {
                    icon: <TbCalendarMinus />,
                    text: 'Coming soon',
                    to: '/cooming-soon'
                }
            ]} />

            <StyledList title='Social' items={[
                {
                    icon: <TbUser />,
                    text: 'Friends',
                    to: '/friends'
                },
                {
                    icon: <TbUsers />,
                    text: 'Parties',
                    to: '/parties'
                }
            ]} />
        </Wrapper>
    </IconContext.Provider>
}

export default SideDrawer