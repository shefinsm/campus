import React from "react";
import styled from "styled-components";

function Replies() {
    const replies = [
        {
            image: require("../../assets/user3.png"),
            name: "Muhammed Shefin",
            time: "15 mins ago",

            text: "Lorem ipsum dolor sit amet consectetur",
        },
        {
            image: require("../../assets/user_img.png"),
            name: "Muhammed Shafi",
            time: "25 mins ago",

            text: " adipisicing elit. Incidunt, facere!",
        },
    ];

    return (
        <MainContainer>
            {replies.map((data) => (
                <ReplyBox>
                    <UserImage>
                        <Img src={data.image.default} />
                    </UserImage>
                    <Content>
                        <ReplyTop>
                            <TopLeft>
                                <ReplyName>{data.name}</ReplyName>
                                <Dot>*</Dot>
                                <ReplyTime>{data.time}</ReplyTime>
                            </TopLeft>
                            <TopRight>***</TopRight>
                        </ReplyTop>
                        <ReplyText>{data.text}</ReplyText>
                    </Content>
                </ReplyBox>
            ))}
            {/* <AddReply /> */}
        </MainContainer>
    );
}
export default Replies;

const MainContainer = styled.div`
    font-family: system-ui;
`;
const ReplyBox = styled.div`
    display: flex;
    padding-left: 120px;
    margin: 20px 0;
`;
const UserImage = styled.div`
    width: 50px;
    margin-right: 30px;
`;
const Img = styled.img`
    display: block;
    width: 100%;
    border-radius: 50%;
`;
const ReplyTop = styled.div`
    display: flex;
    justify-content: space-between;
`;
const TopLeft = styled.div`
    display: flex;
`;
const ReplyName = styled.span`
    font-size: 16px;
    font-weight: 600;
    margin-right: 10px;
    color: #7b7a7a;
`;
const ReplyTime = styled.span`
    font-size: 16px;
    font-weight: 600;
    margin-left: 10px;
    color: #7b7a7a;
`;
const Dot = styled.span`
    transform: translate(0px, 2px);
`;
const TopRight = styled.span``;
const Content = styled.div`
    background-color: #eff4ff;
    padding: 25px;
    border-radius: 30px;
    max-width: 40%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const ReplyText = styled.p`
    margin: 5px 0;
    font-size: 16px;
    font-weight: 600;
    color: #9e9e9e;
`;
