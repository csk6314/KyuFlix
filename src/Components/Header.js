import React from 'react';
import styled from 'styled-components';
import { Link ,withRouter } from 'react-router-dom';

const StyledHeader = styled.header`
    color:white;
    background-color:rgba(20,20,20,0.8);
    position: fixed;
    top:0;
    left:0;
    width:100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding:0px 10px;
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
`;
const List = styled.ul`
    display: flex;
`;
const Item = styled.li`
    width: 50px;
    height: 50px;
    text-align: center;
    &:not(:last-child) {
        margin-right: 10px;
    }
    border-bottom: 3px solid ${props =>(props.current ? "rgba(52, 152, 219,0.8)" : "transparent")};
    transition: border-bottom 0.3s ease-in-out;
`;
const SLink =styled(Link)`
    height: 50px;
    display:flex;
    align-items: center;
    justify-content: center;
`;
const Header = ({location : {pathname}})=>(
    <StyledHeader>
        <List>
            <Item current={pathname==="/"}>
                <SLink to="/">Movies</SLink>
            </Item>
            <Item current={pathname==="/tv"}>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item current={pathname==="/search"}>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </StyledHeader>
);
export default withRouter(Header);