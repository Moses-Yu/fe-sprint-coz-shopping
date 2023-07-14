import styled from "styled-components";

const Item = styled.div`
  display: flex;
  width: 16.5rem;
  height: 16.5rem;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.375rem;

  img {
    width: 16.5rem;
    height: 13.125rem;
    flex-shrink: 0;

    border-radius: 0.75rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .info_top,
  .info_bottom {
    display: flex;
    width: 16.5rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .top_left {
    width: fit-content;
    color: #000;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  .top_right {
    width: fit-content;

    color: #452cdd;

    text-align: right;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
  .bottom_left {
    width: fit-content;
    color: #000;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .bottom_right {
    width: fit-content;

    color: #000;
    text-align: right;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  .brand {
    color: #000;
    text-align: right;
    font-family: Inter;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export default Item