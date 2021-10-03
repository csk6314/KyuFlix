import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet } from "react-helmet-async";
import Message from "Components/Message";
import Modal from "Components/Modal";
const Container = styled.div`
    height: 100vh;
    width:100%;
    position: relative;
    margin-top:-50px;
    padding: 100px 50px 50px 50px;
`;
const Backdrop = styled.div`
    position: absolute;
    top:0px;
    left:0;
    width:100%;
    height:100%;
    background-image: url(${props=>(props.bgImage)});
    background-position: center;
    background-size:cover;
    filter:blur(3px);
    opacity: 0.5;
    z-index: 0;
`;

const Content = styled.div`
    display:flex;
    position: relative;
    width: 100%;
    height: 100%;
    align-items: center;
`;

const Cover = styled.div`
    width: 30%;
    background-image: url(${props=>(props.bgImage)});
    background-position: center;
    background-size:cover;
    height:95%;
    border-radius:5px;
`;
const Data = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width:70%;
    height: 95%;
    margin-left:20px;

`;

const Title = styled.span `
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 10px;
`;

const ItemContainer = styled.div`
    margin:15px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
    margin:0px 10px;
`;

const Overview = styled.p`
    border-top:solid 1px rgba(255,255,255,0.5);
    padding: 15px;
    font-size:13px;
    opacity:0.8;
    line-height: 1.5;
    width: 50%;
`;
const VideoListTitle = styled.span`
    font-size:32px;
    margin-bottom: 20px;
    color:white;
    text-align: center;
    font-weight: 600;
`;
const VideoLinks = styled.div`
width: 100%;
    display: grid;
grid-template-columns: repeat(1,auto);
grid-gap: 5px;
align-items: center;
justify-items:center;

`;
const VideoLink = styled.a`
    font-size: 14px;
    margin: 10px 0;
    color:white;
    padding: 10px;
    border-radius:10px;
    text-align: center;
    width:100%;
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: #970C10;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: scale(1);
        background-color: rgba(52, 152, 219,0.5);
    }
`;
const DetailPresenter = ({
    result,
    loading,
    error,
 }) => (
    <>
    <Helmet>
        <title>Loading | Kyuflix</title>
    </Helmet>
    {loading ? <Loader/> :
    (error ? <Message text={error} color="#e74c3c" /> : <Container>
        <Helmet>
        <title>{result.original_title ? result.original_title : result.original_name} | Kyuflix</title>
        </Helmet>
        <Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}/>
        <Content>
            <Cover bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../Assets/noImage.png").default}/>
            <Data>
                <Title>{result.original_title ? result.original_title : result.original_name}</Title>
                <ItemContainer>
                    <Item>{result.release_date ? result.release_date.substring(0,4) : result.first_air_date.substring(0,4)}</Item>
                    <Divider>ㆍ</Divider>
                    <Item>{result.runtime ? result.runtime : result.episode_run_time[0]} min</Item>
                    <Divider>ㆍ</Divider>
                    <Item>{result.genres.map(({name},index) => index===result.genres.length-1 ? ` ${name}` : ` ${name} /`  )}</Item>
                    <Divider>ㆍ</Divider>
                    <Item>
                    {
                      ( ()=> {
                            const rates = result.vote_average/2;
                            if(rates > 4.5) {
                                return (<>⭐⭐⭐⭐⭐</>);
                            } else if(rates>3.5 && rates <=4.5) {
                                return (<>⭐⭐⭐⭐</>);
                            } else if(rates>2.5 && rates <=3.5) {
                                return (<>⭐⭐⭐</>);
                            }else if(rates>1.5 && rates <=2.5) {
                                return (<>⭐⭐</>);
                            }else if(rates>0.5 && rates <=1.5) {
                                return (<>⭐</>);
                            } else if(rates<=0.5) {
                                return (<></>);
                            }
                        })()
                    }
                    </Item>
                </ItemContainer>
                <Overview>{result.overview}</Overview>
                <Modal><VideoListTitle>Video List</VideoListTitle>
                <VideoLinks>
                    {result.videos.results.map((video,index)=>
                    index< 5 && <VideoLink href={`https://www.youtube.com/watch?v=${video.key}`} target="_blank" key={video.id}>{video.name && video.name.length>60
                     ? `${video.name.substring(0,60)}...`:video.name}</VideoLink>)}
                    </VideoLinks>
                    </Modal>
            </Data>
        </Content>
    </Container>)
    }
    </>
    );
DetailPresenter.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
}
export default DetailPresenter;