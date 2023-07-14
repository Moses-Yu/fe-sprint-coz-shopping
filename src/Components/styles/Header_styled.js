import { styled } from "styled-components";

const HeaderStyle = styled.header`
  box-sizing: border-box;
  position: relative;
  /* width: 80rem; */
  height: 5rem;
  background: #fff;
  box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: row;
  padding-left: 4.75rem;
  padding-right: 4.75rem;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 3.4375rem;
    height: 1.875rem;
    flex-shrink: 0;
    background: url("images/logo.png");
  }

  .title {
    display: flex;
    width: 14.375rem;
    height: 1.85188rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    color: #000;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 88.023%;

    margin-left: 0.75rem;
  }

  .section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export default HeaderStyle