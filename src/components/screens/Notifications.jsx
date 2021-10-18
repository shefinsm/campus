import React from "react";
import styled from "styled-components";

function Notifications() {
    const notifications = [
        {
            image: require("../../assets/user_img.png"),
            background: "#d4e1ff",
            user: "Kit Harrington",
            text: "commented on your post",
            time: "3 Mins Ago",
        },
        {
            image: require("../../assets/user1.png"),
            background: "#d4e1ff",
            user: "Kia",
            text: "replied on your post",
            time: "13 Mins Ago",
        },
        {
            image: require("../../assets/user2.png"),
            background: "#fff",
            user: "Kiaron",
            text: "commented and replied on your post",
            time: "23 Mins Ago",
        },
        {
            image: require("../../assets/user3.png"),
            background: "#fff",
            user: "Harron",
            text: "commented on your photo",
            time: "33 Mins Ago",
        },
        {
            image: require("../../assets/user_img.png"),
            background: "#fff",
            user: "Harry",
            text: "replied to your comment",
            time: "43 Mins Ago",
        },
    ];

    return (
        <MainContainer>
            <NotificationContainer>
                {notifications.map((data) => (
                    <NotificationBox background={data.background}>
                        <UserImage>
                            <Img src={data.image.default} />
                        </UserImage>
                        <BoxRight>
                            <NotificationText>
                                <User>{data.user}</User>
                                <UserText>{data.text}</UserText>
                            </NotificationText>
                            <NotificationTime>{data.time}</NotificationTime>
                        </BoxRight>
                    </NotificationBox>
                ))}
            </NotificationContainer>
        </MainContainer>
    );
}
export default Notifications;

const MainContainer = styled.div`
    font-family: system-ui;
`;
const NotificationBox = styled.div`
    background-color: ${(props) => props.background};
    padding: 30px;
    display: flex;
    margin-bottom: 2px;
    border-radius: 9px;
`;
const NotificationContainer = styled.div``;
const UserImage = styled.div`
    width: 90px;
    margin-right: 30px;
`;
const Img = styled.img`
    display: block;
    width: 100%;
    border-radius: 50%;
`;
const NotificationText = styled.div`
    display: flex;
    align-items: center;
`;
const User = styled.span`
    font-size: 21px;
    font-weight: 500;
    color: #525050;
`;
const UserText = styled.p`
    font-size: 17px;
    font-weight: 500;
    color: #6e6e6e;
    transform: translate(7px, 1px);
`;
const NotificationTime = styled.span`
    font-size: 15px;
    font-weight: 500;
    color: #a7a4a4;
`;
const BoxRight = styled.div``;
