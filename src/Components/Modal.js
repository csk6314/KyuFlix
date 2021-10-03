import React, { Component } from "react";
import styled from "styled-components";
const VideoListModal = styled.div`
    height: 100vh;
    width: 100vw;
    top:0;
    left:0;
    position: fixed;
    z-index: 1;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;
const VideoList = styled.div`
padding: 20px;
height: 60%;
width:20%;
background-color: rgb(32,32,32);
border-radius: 10px;
color:black;
font-size: 20px;
display: flex;
flex-direction: column;
align-items: center;
`;
const WatchVideo = styled.button`
    width: 10%;
    height: 5%;
    border:none;
    border-radius: 5px;
    color:white;
    background-color: rgba(52, 152, 219,0.8);
    transition:background-color 0.2s ease-in-out;
    &:hover {
        transform: scale(1.05);
    }
    &:active {
        background-color: rgba(52, 152, 219,0.5);
        transform: scale(1);
    }
`;
class Modal extends Component {
    state = {
        visible:false,
    }
    showModal = () => {
        this.setState({
            visible:true
        });
    }
    closeModal = () => {
        this.setState({
            visible:false
        });
    }
    render() {
        const {visible} = this.state;
        const {children} = this.props;
        return (
            <>
                <WatchVideo onClick={this.showModal}>Watch Video!</WatchVideo>
                {visible &&
                    <VideoListModal onClick={this.closeModal}>
                        <VideoList onClick={e=>e.stopPropagation()}>{children}</VideoList>
                    </VideoListModal>
                }
            </>)
    }
}
export default Modal;