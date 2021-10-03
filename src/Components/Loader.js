import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 20vh;
    width:100vw;
    display:flex;
    justify-content: center;
    align-items: center;
`;
const Loading = styled.span`
    font-size: 20px;
    color:rgba(52, 152, 219,0.8);
`;
const Loader = ()=> (
    <Container>
        <Loading aria-label="Loading">
            Loading...
        </Loading>
    </Container>
);
export default Loader;