import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  //props.color 가 있으면 props.color를, 그렇지 않으면 흰색을 배경색으로 사용
  background: ${(props) => props.color || 'white'};
  //props.size 가 big 이면 200px, 그렇지 않으면 100px 를 너비로 사용
  width: ${(props) => (props.size === 'big' ? '200px' : '100px')};
  //props.size 가 big 이면 80px, 아니면 40px를 높이로 사용
  height: ${(props) => (props.size === 'big' ? '80px' : '40px')};
`;

export const Button = ({color, size, text}) => (
    //위에서 작성한 props + text 를 받아 textContent로 사용
    <StyledButton color={color} size={size}>{text}</StyledButton>
);