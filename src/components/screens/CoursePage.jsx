import React from "react";
import styled from "styled-components";
import Comments from "./Comments";

function CoursePage() {
    return (
        <CourseContainer>
            <College>
                <IconImage>
                    <Img
                        src={require("../../assets/chakra.png").default}
                        alt="image"
                    />
                </IconImage>
                <CollegeContent>
                    <CollegeName>University of Greenwich</CollegeName>
                    <Days>3 Days Ago</Days>
                </CollegeContent>
            </College>

            <Description>
                <Content>
                    Dear Students! <p></p> Now, Canada is the third country in
                    the world to authorize a COVID-19 vaccine. Approval for
                    COVID-19 vaccine given on December 9, 2020. Additionally
                    Canada has given the green light to COVID-19 vaccine. Also,
                    as per the Canadian government, Health Canada authorized the
                    Pfizer-BioNTech COVID-19 mRNA vaccine (Tozinameran or
                    BNT162b2) for use for the COVID-19 pandemic". <p></p>Contact
                    Edumpus FREE Counselling & make your Overseas Careers dream
                    a reality. -Students can also DM us for further details
                </Content>
                <ImageBox>
                    <Img
                        src={require("../../assets/people.jpg").default}
                        alt="image"
                    />
                </ImageBox>
            </Description>
            <CommemtNum>7 Comments * 2 Replies</CommemtNum>

            <EnterComments>
                <IconImage>
                    <Img
                        src={require("../../assets/chakra.png").default}
                        alt="image"
                    />
                </IconImage>
                <InputComments>
                    <input
                        type="textarea"
                        style={{
                            width: "99%",
                            padding: "10px 0 100px 10px",
                            border: "2px solid #d4d2d2",
                            fontFamily: "inherit",
                            fontSize: "15px",
                            fontWeight: "600",
                            color: "#6e6e6e",
                        }}
                        placeholder="Add a comment"
                    />
                    <Post>Post</Post>
                </InputComments>
            </EnterComments>
            <ViewComments>View 5 More Comments</ViewComments>

            <CommentsContainer>
                <Comments />
                <AddComment>Add a Comment</AddComment>
            </CommentsContainer>
        </CourseContainer>
    );
}
export default CoursePage;

const CourseContainer = styled.div`
    font-family: system-ui;
    background-color: #fff;
    margin: 0 auto;
    border-radius: 9px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const CollegeContent = styled.div`
    margin-left: 20px;
`;
const College = styled.div`
    display: flex;
    align-items: center;
    padding: 30px;
`;
const IconImage = styled.div`
    width: 60px;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const CollegeName = styled.h5`
    margin: 0;
    font-size: 17px;
    color: #6e6e6e;
`;
const Days = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: #9c9c9c;
`;
const Description = styled.div``;
const Content = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #6e6e6e;
    padding: 0 30px;
    margin: 0;
`;
const ImageBox = styled.div`
    margin: 30px 0;
`;
const CommemtNum = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: #9e9e9e;
    background-color: #e2e2e2;
    padding: 10px 20px;
    border-radius: 50px;
    margin-left: 30px;
`;
const EnterComments = styled.div`
    display: flex;
    margin-top: 50px;
    padding: 0 30px;
    margin-bottom: 30px;
`;
const InputComments = styled.div`
    position: relative;
    width: 100%;
    margin-left: 20px;
`;
const Post = styled.span`
    position: absolute;
    bottom: 10px;
    left: 15px;
    font-size: 15px;
    color: #b7b7b7;
    cursor: pointer;
`;
const ViewComments = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: #848383;
    padding-left: 30px;
`;
const CommentsContainer = styled.div`
    padding-bottom: 50px;
    margin-bottom: 60px;
`;
const AddComment = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: #848383;
    cursor: pointer;
    margin-left: 30px;
    background-color: #ececec;
    padding: 10px 20px;
    border-radius: 50px;
`;
