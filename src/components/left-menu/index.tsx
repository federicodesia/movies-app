import { Wrapper, HeaderWrapper, Item, ListTitle, StyledLink, StyledLinkText, ItemIconWrapper, StyledHeader, MenuIcon } from "./style";

import { HiOutlineHome } from "react-icons/hi"
import { TbHeart, TbCalendarMinus, TbUser, TbUsers, TbSettings } from "react-icons/tb"
import { useMatch, useResolvedPath } from "react-router-dom";
import { IconContext } from "react-icons";
import ActiveIndicator from "../../styles/active-indicator";
import useMediaQuery from "../../hooks/use-media-query";
import { between } from "../../styles/breakpoints";
import { Row } from "../../styles/styles";

interface StyledListProps {
    title: string,
    items: ItemProps[]
    onClickItem: () => void
}

interface ItemProps {
    to: string
    icon: JSX.Element
    text: string
}

interface StyledItemProps extends ItemProps {
    onClickItem: () => void
}

const StyledList = ({ title, items, onClickItem }: StyledListProps) => <div>
    <ListTitle>{title} </ListTitle>
    <ul>
        {
            items.map((item, index) => {
                return <StyledItem
                    key={`${title} ${item.text} ${index}`}
                    onClickItem={onClickItem}
                    {...item}
                />
            })
        }
    </ul>
</div>

const StyledItem = ({ to, icon, text, onClickItem }: StyledItemProps) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    const isActive = match !== null

    return (
        <Item>
            <ActiveIndicator side='left' isActive={isActive} />
            <StyledLink to={to} $isActive={isActive} onClick={onClickItem} >
                <ItemIconWrapper>
                    {icon}
                </ItemIconWrapper>
                <StyledLinkText maxLines={1}>{text} </StyledLinkText>
            </StyledLink>
        </Item>
    );
}

interface LeftMenuProps {
    showCloseIcon?: boolean
    onClose?: () => void
}

const LeftMenu = ({ showCloseIcon = false, onClose }: LeftMenuProps) => {
    const collapsed = useMediaQuery(between('lg', 'xxl'))
    const close = () => onClose && onClose()

    return <IconContext.Provider value={{ size: '18px' }}>
        <Wrapper>
            <HeaderWrapper>
                {
                    collapsed
                        ? <Row justifyContent='center'>
                            <StyledHeader>M</StyledHeader>
                            <StyledHeader variant='light'>A</StyledHeader>
                        </Row>
                        : <Row alignItems='center' gap='16px'>
                            {
                                showCloseIcon && <MenuIcon onClick={close} />
                            }

                            <Row>
                                <StyledHeader>MOVIES</StyledHeader>
                                <StyledHeader variant='light'>APP</StyledHeader>
                            </Row>
                        </Row>
                }
            </HeaderWrapper>

            <StyledList title='Menu' onClickItem={close} items={[
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

            <StyledList title='Social' onClickItem={close} items={[
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

export default LeftMenu