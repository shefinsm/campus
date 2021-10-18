import React from "react";
import styled from "styled-components";

function CreateCourse() {
    const steps = [
        {
            image: require("../../assets/doc.png"),
            background: "#ddefdd",
            colour: "#1c944d",
            status: "Basic Information",
        },
        {
            image: require("../../assets/doc-blu.png"),
            background: "#d0d8ff",
            colour: "#5469d6",
            status: "Additional Information",
        },
        {
            image: require("../../assets/trophy.png"),
            background: "#dadada",
            colour: "#6e6e6e",
            status: "Eligibility & Syllabus ",
        },
        {
            image: require("../../assets/money.png"),
            background: "#dadada",
            colour: "#6e6e6e",
            status: "Fee & Scholarship",
        },
    ];

    return (
        <MainContainer>
            <Header>
                <HeaderLeft>
                    <Heading>Course Creation</Heading>
                    <StepCount>Step 2 of 4</StepCount>
                </HeaderLeft>
                <HeaderRight>
                    <SaveAs>
                        <SaveImg
                            src={require("../../assets/save.png").default}
                            alt="Profession"
                        />
                        <SaveText>Save as Draft</SaveText>
                    </SaveAs>
                    <Close>
                        <CloseImg
                            src={require("../../assets/close.png").default}
                            alt="Profession"
                        />
                    </Close>
                </HeaderRight>
            </Header>

            <PathBox>
                {steps.map((data) => (
                    <PathStep>
                        <StepImage background={data.background}>
                            <Img src={data.image.default} />
                        </StepImage>
                        <StepText colour={data.colour}>{data.status}</StepText>
                    </PathStep>
                ))}
            </PathBox>
        </MainContainer>
    );
}
export default CreateCourse;

const PathStep = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 60px;
`;
const MainContainer = styled.div`
    font-family: system-ui;
`;
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`;
const Heading = styled.h2`
    font-size: 23px;
    margin-right: 40px;
`;
const StepCount = styled.span`
    font-size: 12px;
    font-weight: 700;
    background-color: #dadada;
    color: #a5a5a5;
    padding: 7px 14px;
    border-radius: 50px;
`;
const HeaderRight = styled.div`
    display: flex;
    align-items: center;
`;
const SaveAs = styled.div`
    display: flex;
    align-items: center;
    background-color: #2d2db7;
    padding: 9px 18px;
    border-radius: 3px;
    margin-right: 30px;
`;
const SaveImg = styled.img`
    display: block;
    width: 15px;
`;
const SaveText = styled.span`
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    margin-left: 10px;
`;
const Close = styled.div`
    width: 18px;
    background-color: #ffffff;
    padding: 9px;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    border-radius: 50%;
`;
const CloseImg = styled.img`
    display: block;
    width: 100%;
`;
const PathBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const StepImage = styled.div`
    background-color: ${(props) => props.background};
    padding: 30px;
    border-radius: 50%;
    width: 40px;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const StepText = styled.p`
    font-size: 17px;
    font-weight: 500;
    color: ${(props) => props.colour};
`;
