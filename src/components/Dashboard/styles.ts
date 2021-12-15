import styled from "styled-components";

export const Container = styled.div`
  background: var(--dashboard-bg);
  max-width: 1400px;
  width: 100%;
  min-height: 84vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  margin: 0 auto;
`;
export const Order = styled.div`
  max-width: 1080px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: right;
  padding-right: 3rem;
  align-items: flex-start;
  margin: 0 auto;
  .DropDownStyle{
    cursor: pointer;
    color: whitesmoke;
    background-image: url('seta.svg');
    background-size: 2rem;
    background-repeat: no-repeat;
    background-position: right;
    padding-right: 2.5rem;
  }
  button{
    padding: 0.4rem 0rem;
    color: whitesmoke;
    width: 8rem;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    background-color: red;
    border: 0;
    background: transparent;
    transition: filter 0.2s;
      &:hover{
        filter: brightness(0.8);
      }
  }
  
`;
