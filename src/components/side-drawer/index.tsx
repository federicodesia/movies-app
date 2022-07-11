import { Wrapper, HeaderWrapper, List, Item, ListTitle, StyledLink, StyledLinkText } from "./style";

import { HiOutlineHome, HiOutlineLogout } from "react-icons/hi"
import { TbHeart, TbCalendarMinus, TbUser, TbUsers, TbSettings } from "react-icons/tb"
import { useMatch, useResolvedPath } from "react-router-dom";
import { IconContext } from "react-icons";
import ActiveIndicator from "../../styles/active-indicator";
import { Header } from "../../styles/text";

interface StyledListProps {
    title: string,
    items: StyledItemProps[]
}

const StyledList = ({ title, items }: StyledListProps) => <div>
    <ListTitle>{title} </ListTitle>
    <List>
        {
            items.map((item, index) => <StyledItem
                key={`${title} ${item.text} ${index}`}
                {...item}
            />)
        }
    </List>
</div>

interface StyledItemProps {
    to: string
    icon: JSX.Element
    text: string
}

const StyledItem = ({ to, icon, text }: StyledItemProps) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    const isActive = match !== null

    return (
        <Item>
            <ActiveIndicator side='left' isActive={isActive} />
            <StyledLink to={to} $isActive={isActive}>
                {icon}
                <StyledLinkText $isActive={isActive}>{text} </StyledLinkText>
            </StyledLink>
        </Item>
    );
}

function SideDrawer() {
    return <IconContext.Provider value={{ size: '18px' }}>
        <Wrapper>
            <HeaderWrapper>
                <Header>MOVIES</Header>
                <Header variant='light'>APP</Header>
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

            <StyledList title='General' items={[
                {
                    icon: <TbSettings />,
                    text: 'Settings',
                    to: '/settings'
                },
                {
                    icon: <HiOutlineLogout />,
                    text: 'Log out',
                    to: '/logout'
                }
            ]} />
        </Wrapper>
    </IconContext.Provider>
}

export default SideDrawer