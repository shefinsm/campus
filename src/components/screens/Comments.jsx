import React from "react";
import styled from "styled-components";
import Replies from "./Replies";

function Comments() {
    const comments = [
        {
            image: require("../../assets/user3.png"),
            name: "Muhammed Shefin",
            time: "5 mins ago",
            number: "2",
            text: "Add Your Documents Carefully",
        },
        {
            image: require("../../assets/user_img.png"),
            name: "Muhammed Shafi",
            time: "25 mins ago",
            number: "5",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, facere!",
        },
    ];

    return (
        <MainContainer>
            {comments.map((data) => (
                <>
                    <CommentBox>
                        <UserImage>
                            <Img src={data.image.default} />
                        </UserImage>
                        <Comment>
                            <Section>
                                <CommentTop>
                                    <TopLeft>
                                        <CommentName>{data.name}</CommentName>
                                        <Dot>*</Dot>
                                        <CommentTime>{data.time}</CommentTime>
                                    </TopLeft>
                                    <TopRight>***</TopRight>
                                </CommentTop>
                                <CommentText>{data.text}</CommentText>
                            </Section>
                            <ViewReply>
                                <ReplyIcon
                                    src={
                                        require("../../assets/reply.png")
                                            .default
                                    }
                                    alt="Profession"
                                />
                                <ReplyNum>{data.number} Replies</ReplyNum>
                                <Dot>*</Dot>
                                <ReplyBtn>Reply</ReplyBtn>
                            </ViewReply>
                        </Comment>
                    </CommentBox>
                    <Replies />
                </>
            ))}
        </MainContainer>
    );
}
export default Comments;

const MainContainer = styled.div`
    font-family: system-ui;
    padding: 30px;
`;
const CommentBox = styled.div`
    display: flex;
    margin-bottom: 20px;
`;
const UserImage = styled.div`
    width: 90px;
    margin-right: 30px;
`;
const Img = styled.img`
    display: block;
    width: 100%;
    border-radius: 50%;
`;
const Comment = styled.div``;
const CommentTop = styled.div`
    display: flex;
    justify-content: space-between;
`;
const TopLeft = styled.div``;
const CommentName = styled.span`
    font-size: 17px;
    font-weight: 600;
    margin-right: 10px;
    color: #7b7a7a;
`;
const Dot = styled.span`
    transform: translate(0px, 2px);
`;
const CommentTime = styled.span`
    font-size: 17px;
    font-weight: 600;
    margin-left: 10px;
    color: #7b7a7a;
`;
const TopRight = styled.span``;
const CommentText = styled.p`
    margin: 5px 0;
    font-size: 17px;
    font-weight: 600;
    color: #9e9e9e;
`;
const Section = styled.div`
    background-color: #eff4ff;
    padding: 25px;
    border-radius: 30px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const ViewReply = styled.div`
    display: flex;
    align-items: center;
    margin: 12px 0;
`;
const ReplyIcon = styled.img``;
const ReplyNum = styled.span`
    font-size: 13px;
    font-weight: 600;
    margin: 0px 10px;
    color: #7b7a7a;
`;
const ReplyBtn = styled.span`
    font-size: 13px;
    font-weight: 600;
    margin-left: 10px;
    color: #7b7a7a;
    cursor: pointer;
`;
