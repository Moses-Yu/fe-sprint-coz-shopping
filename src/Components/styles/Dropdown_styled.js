import styled from "styled-components"
const DropdownStyle = styled.div`
  position: absolute;
  top: 3rem;
  right: 2rem;
  width: 12.5rem;
  height: 10.75rem;

  display: flex;
  flex-direction: column;
  /* box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 1); */

  > img {
    position: relative;
    margin-left: 8.13rem;
    margin-top: 0.25rem;
    width: 1rem;
    height: 1.125rem;
  }

  ul {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    display: flex;
    width: 12.5rem;
    height: 9.375rem;
    flex-direction: column;
    align-items: flex-start;
    flex-shrink: 0;

    border-radius: 0.75rem;
    background: #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  }

  li {
    box-sizing: border-box;
    list-style: none;
    width: 12.5rem;
    height: 3.125rem;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
    color: #000;
    text-align: center;
    /* font-family: Inter; */
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 88.023%;
    flex-shrink: 0;
  }
  li.mypage{
    display: flex;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    column-gap: 0.5rem;
  }
  .link_li:last-child {
    border-radius: 0 0 0.75rem 0.75rem;
    border-bottom: none;
  }

  li > img {
    width: 1.25rem;
    height: 1.25rem;
    flex-shrink: 0;
  }

  .link_li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding-left: 1.5rem;
  }

  .li_icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: baseline;
    column-gap: 0.5rem;
  }
`;

export default DropdownStyle
