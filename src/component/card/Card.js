import React from "react";
import styled, { css } from "styled-components";

const StyleCard = styled.div`
    position: relative;

    margin: 30px;
`;
const CartImage = styled.div`
    height: 400px;
    width: 400px;
    border-radius: 8px;
`;
const CardImg = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    border-radius: inherit;
    object-fit: cover;
`;
const CardContent = styled.div`
    position: absolute;
    background-color: #fff;
    width: calc(100%, -36px);
    padding: 14px;
    left: 36%;
    transform: translate(-50%, 50%);
    border-radius: 20px;
    bottom: 0;
    z-index: 10;
`;
const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;
const CartUser = styled.div`
    display: flex;
    align-items: center;
    column-gap: 20px;
`;
const UserName = styled.span`
    font-weight: 300;
    font-size: 16px;
    color: #333333;
`;
const CardUserImg = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
`;
const CardIcon = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`;
const CardText = styled.span`
    color: #333333;
    font-weight: 400;
    font-size: 16px;
`;
const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const CardTitle = styled.h3`
    width: 230px;
    height: 27px;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: black;
    ${(props) =>
        props.secondary &&
        css`
            color: #20e2b2;
        `};

    -webkit-background-clip: text;
    background-clip: text;
`;
const CardSNumber = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: transparent;
    background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
    );
    ${(props) =>
        props.primary &&
        css`
            background: linear-gradient(86.88deg, #20e2b2 #2cccff);
        `};
    -webkit-background-clip: text;
    background-clip: text;
`;
const Card = (props) => {
    console.log("props: ", props);
    return (
        <StyleCard>
            <CartImage>
                <CardImg
                    src="https://cdn.dribbble.com/users/2400293/screenshots/16630840/media/ed6af0d38d460ff9ee426ad69e6435ea.png?compress=1&resize=1000x750&vertical=top"
                    alt=""
                />
            </CartImage>
            <CardContent>
                <CardTop>
                    <CartUser>
                        <CardUserImg
                            src="https://cdn.dribbble.com/users/2400293/screenshots/16630840/media/ed6af0d38d460ff9ee426ad69e6435ea.png?compress=1&resize=1000x750&vertical=top"
                            alt=""
                        />
                        <UserName>@zndrson</UserName>
                    </CartUser>
                    <CardIcon>
                        <img src="/icon-heart.svg" alt="heart" />
                        <CardText>256</CardText>
                    </CardIcon>
                </CardTop>
                <CardFooter>
                    <CardTitle secondary>Cosmic Perspective</CardTitle>
                    <CardSNumber primary={props.primary}>
                        12,000 PSL
                    </CardSNumber>
                </CardFooter>
            </CardContent>
        </StyleCard>
    );
};

export default Card;
