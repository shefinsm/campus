import React from "react";
import styled from "styled-components";

function AddReply() {
    return (
        <MainContainer>
            <AddReply>
                <IconImage>
                    <Img />
                </IconImage>
                <ReplyInput>
                    <Input>
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
                    </Input>
                    <AddReplyBtn></AddReplyBtn>
                </ReplyInput>
            </AddReply>
        </MainContainer>
    );
}

export default AddReply;

const MainContainer = styled.div``;
const IconImage = styled.div``;
const Img = styled.img``;
const ReplyInput = styled.div``;
const Input = styled.div``;
const AddReplyBtn = styled.div``;
