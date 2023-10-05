import styled from "styled-components";

export const StyledNavbarProfileIcon = styled.img.attrs<{ isOpened?: boolean }>(props => ({
    isOpened: props.isOpened,
  }))`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: 20px;

    &:hover {
        cursor: pointer;
    }
    ${props => props.isOpened && `
        border: 1px solid #ddd;
        background-color: #f8f9fa;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    `}

    @media (max-width: 321px) {
        width: 30px;
        height: 30px;
        margin-right: 25px;
        margin-left: -5px;
    }
`;