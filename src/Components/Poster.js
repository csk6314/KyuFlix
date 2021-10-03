import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Container = styled.div`
    font-size:12px;
`;
const Image = styled.div`
    background-image: url(${props=>props.bgUrl});
    height: 180px;
    background-size:cover;
    border-radius: 4px;
    background-position: center;
    transition: opacity 0.1s linear;
`;
const Rating = styled.span`
    position: absolute;
    top:164px;
    width: 100%;
    text-align:right;
    right:5px;
    opacity:0;
    transition: opacity 0.1s linear,box-shadow 0.1s linear;
`;
const ImageContainer = styled.div`
    margin-bottom: 5px;
    position: relative;
    &:hover {
        ${Image} {
            opacity: 0.5;
            box-shadow: #2E8BC0 0px 1px 2px 0px, #2E8BC0 0px 1px 3px 1px;
        }
        ${Rating} {
            opacity: 1;
        }
    }
`;
const Title = styled.span`
    display: block;
    margin-bottom: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 15px;
`;
const Year = styled.span`
    font: 10px;
    color:rgba(255,255,255,0.5);
`;

const Poster = ({id, imageUrl,title,rating,year, isMovie = false}) => (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
        <Container>
        <ImageContainer>
            <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : require("../Assets/noImage.png").default}/>
            <Rating>
                <span role="img" aria-label="rating">
                    {
                      ( ()=> {
                            const rates = rating/2;
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
                </span>
                {rating}/10
            </Rating>
        </ImageContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
    </Container>
    </Link>
);

Poster.propTypes = {
    imageURL:PropTypes.string,
    id:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating:PropTypes.number,
    year:PropTypes.string,
    isMovie:PropTypes.bool

}
export default Poster;