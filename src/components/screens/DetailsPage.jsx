import React from "react";
import Card from "./Card";
import styled from "styled-components";
import Notifications from "./Notifications";
import CoursePage from "./CoursePage";

function DetailsPage() {
    return (
        <MainContainer>
            <Card />
            <CoursePage />
            <Notifications />
        </MainContainer>
    );
}
export default DetailsPage;

const MainContainer = styled.div`
    background-color: #eff4ff;
    width: 65%;
    margin: 0 auto;
    padding: 40px;
    @media (max-width: 480px) {
    }
`;
