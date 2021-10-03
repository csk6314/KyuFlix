import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
    padding: 10px;
    width:Calc(100vw - 20px);
    display: flex;
    justify-content: center;
    
`;

const Text = styled.span`
    color:${props => props.color};
    font-weight: 600;
    font-size: 20px;
`;
 
const Message = ({text,color})=> (
    <Container>
        <Text color={color}>
            {text}
        </Text>
    </Container>
)
Message.propTypes = {
    text : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired,
}

export default Message;
