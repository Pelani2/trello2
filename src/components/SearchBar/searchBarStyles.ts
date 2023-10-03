import styled from "styled-components";

export const StyledSearchForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 25px;
    background-color: #f5f5f5;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
    width: 400px;
    transition: all 0.3 ease-in-out;


    &:focus-within {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
        border: 2px solid #5f9ea0;
        transform: perspective(600px) rotateX(5deg);
    }
`;