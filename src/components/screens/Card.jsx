import React, { useState } from "react";

import styled from "styled-components";
function Card() {
    const users = [
        {
            image: require("../../assets/user3.png"),
            name: "Muhammed Shefin",
            id: "EDU-IND-984744",
            mail: "myemail@gmail.com",
            phone: "+91 9876543210",
            course: "Bachelor of Technology , Information Technology",
            status: "Add Your Documents",
            is_verified: "true",
            is_applied: "true",
        },
        {
            image: require("../../assets/user.png"),
            name: "Charlotte Rosalie",
            id: "EDU-IND-896654",
            mail: "myemails@gmail.com",
            phone: "+91 9638527410",
            course: "Bachelor of Commerce",
            status: "Verified",
            is_verified: "false",
            is_applied: "true",
        },
        {
            image: require("../../assets/user1.png"),
            name: "Jhon Doe",
            id: "EDU-IND-578545",
            mail: "myemailz@gmail.com",
            phone: "+91 9874563210",
            course: "Master of Business Administration",
            status: "Applied",
            is_verified: "true",
            is_applied: "false",
        },
    ];
    return (
        <MainContainer>
            {users.map((data) => (
                <UserCard>
                    <CardTop>
                        <UserContent>
                            {data.is_verified === "true" ? (
                                <UserBox is_verified={data.is_verified}>
                                    <User>
                                        <UserImg src={data.image.default} />
                                    </User>
                                    <Tick>
                                        <TickImg
                                            src={
                                                require("../../assets/tick.png")
                                                    .default
                                            }
                                            alt="image"
                                        />
                                    </Tick>
                                </UserBox>
                            ) : (
                                <Empty>
                                    <EmptyImg src={data.image.default} />
                                </Empty>
                            )}
                            <UserNameId>
                                <Username>{data.name}</Username>
                                <UserId>{data.id}</UserId>
                            </UserNameId>
                        </UserContent>
                        {data.is_verified === "true" ? (
                            <Edit>
                                <EditImg
                                    src={
                                        require("../../assets/edit.png").default
                                    }
                                    alt="image"
                                />
                            </Edit>
                        ) : (
                            <New>New</New>
                        )}
                    </CardTop>

                    <UserDetails>
                        <Detail>
                            <DetailImg
                                src={require("../../assets/phone.png").default}
                                alt="image"
                            />
                            <SpanDetail>{data.phone}</SpanDetail>
                        </Detail>
                        <Detail>
                            <DetailImg
                                src={require("../../assets/mail.png").default}
                                alt="image"
                            />
                            <SpanDetail>{data.mail}</SpanDetail>
                        </Detail>
                        <Detail>
                            <CourseImg
                                src={require("../../assets/course.png").default}
                                alt="image"
                            />
                            <SpanDetail>{data.course}</SpanDetail>
                        </Detail>
                    </UserDetails>

                    <CardBottom>
                        <Info>{data.status}</Info>
                        {data.is_applied === "true" ? (
                            <Stack>
                                <StackImg
                                    src={
                                        require("../../assets/stack.png")
                                            .default
                                    }
                                    alt="image"
                                />
                            </Stack>
                        ) : null}
                    </CardBottom>
                </UserCard>
            ))}
        </MainContainer>
    );
}

export default Card;

const MainContainer = styled.div`
    font-family: system-ui;
    display: flex;
    margin-bottom: 60px;
`;
const UserCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 420px;
    border-radius: 9px;
    padding: 10px 20px 25px 20px;
    background-color: #fff;
    margin-right: 30px;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    &:last-child {
        margin-right: 0;
    }
    &:nth-child(2) {
        box-shadow: rgb(0 0 0 / 20%) 0px 12px 28px 0px,
            rgb(0 0 0 / 10%) 0px 2px 4px 0px,
            rgb(255 255 255 / 5%) 0px 0px 0px 1px inset;
    }
`;
const CardTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #dadada;
    margin-bottom: 25px;
    height: 120px;
`;
const UserBox = styled.div`
    position: relative;
`;
const User = styled.div``;
const UserImg = styled.img`
    display: block;
    border-radius: 50%;
    width: 80px;
    margin-right: 20px;
`;
const Empty = styled.div`
    margin-right: 20px;
    padding: 10px;
    background-color: #e4e4e4;
    border-radius: 50%;
`;
const EmptyImg = styled.img`
    display: block;
    width: 36px;
    transform: translate(2px, -2px);
`;
const Tick = styled.div`
    position: absolute;
    top: 0;
    left: 57px;
    background-color: #ddefdd;
    border-radius: 50%;
    padding: 3px;
    border: 3px solid #fff;
    width: 20px;
`;
const TickImg = styled.img`
    display: block;
    width: 100%;
`;
const UserNameId = styled.div``;
const UserContent = styled.div`
    display: flex;
    align-items: center;
`;
const Username = styled.h5`
    font-family: system-ui;
    font-size: 17px;
    color: #6e6e6e;
    font-weight: 700;
    margin: 0;
`;
const UserId = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: #949494;
`;
const Edit = styled.div`
    width: 20px;
    background-color: #d0d8ff;
    border-radius: 50%;
    padding: 15px;
`;
const EditImg = styled.img`
    display: block;
    width: 100%;
`;
const New = styled.span`
    color: green;
    background-color: #c8f1c8;
    font-size: 13px;
    font-weight: 500;
    padding: 3px 15px 6px;
    border-radius: 50px;
`;
const UserDetails = styled.div``;
const Detail = styled.div`
    display: flex;
    align-items: end;
    margin-bottom: 20px;
`;
const DetailImg = styled.img`
    display: block;
    width: 20px;
`;
const CourseImg = styled.img`
    display: block;
    width: 25px;
`;
const SpanDetail = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: #6e6e6e;
    margin-left: 15px;
`;
const CardBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Info = styled.span`
    background-color: #eaf5ff;
    font-size: 17px;
    font-weight: 500;
    color: #21a7da;
    border-radius: 50px;
    padding: 5px 25px;
`;
const Stack = styled.div`
    width: 25px;
    padding: 7px;
    border-radius: 50px;
    border: 1px solid #dadada;
`;
const StackImg = styled.img`
    display: block;
    width: 100%;
`;
