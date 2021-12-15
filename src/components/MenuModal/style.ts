import styled, { createGlobalStyle } from "styled-components";
interface UlProps {
  isHardwareOpen: boolean;
  isPerifericoOpen: boolean;
}
export const Ul = styled.ul<UlProps>`
  list-style: none;

  .logo {
    margin-bottom: 2rem;
    margin-top: 2rem;
    margin-left: 2rem;
    cursor: pointer;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.5);
    }
    }
  li {
    display: flex;
    flex-direction: column;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    position: relative;
    transition: filter 0.2s;
    background-color: rgba(39,45,71);
    color: whitesmoke;
    /* ${(props) => props.isHardwareOpen && "filter: brightness(0.9);"}
    ${(props) => props.isPerifericoOpen && "filter: brightness(0.9);"} */
    &:hover {
      filter: brightness(0.9);
      /* background-color: rgba(39,45,69, 0.9); */
    }
    a {
      padding: 1.25rem 3rem;
      width: 300px;
      text-decoration: none;
      color: whitesmoke;
    }
    .sozinho {
      padding-right: 2rem;
    }
    .seta {
      margin-right: 40px;
    }
  }
`;
export const ModalStyled = createGlobalStyle`
    .menu-modal-overlay{
    background: rgba(0,0,0, 0.5);   
    opacity: 0;
    transition: all 300ms ease-in-out;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    color: whitesmoke;
    }
    .ReactModal__Overlay--after-open{
    opacity: 1;
    } 
    .ReactModal__Overlay--before-close{
    opacity: 0;
    }
`;
interface DropdownProps {
  isSubMenuOpen: boolean;
}
export const Dropdown = styled.div<DropdownProps>`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  transition: all 0.4s ease-out;
  cursor: pointer;
  img {
    transition: 0.2s;
    ${(props) => props.isSubMenuOpen && "transform: rotate(180deg);"}
  }
`;

interface SubMenuProps {
  isSubMenuOpen: boolean;
}

export const SubMenu = styled.div<SubMenuProps>`
  cursor: pointer;
  ${(props) => (props.isSubMenuOpen ? "display: block; " : "display: none;")}
  li {
    ${(props) => (props.isSubMenuOpen && "background-color: #23283f;")}
    a {
      display: block;
      padding: 0.5rem 4rem;
      width: 300px;
      text-decoration: none;
      color: whitesmoke;
      transition: filter 0.2s;
      &:hover{
        filter: brightness(0.5);
      }
    }
  }
`;

