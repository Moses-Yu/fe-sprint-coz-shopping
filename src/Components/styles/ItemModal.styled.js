import styled from "styled-components";

export const ItemModalStyle = styled.div`
  background: rgba(255, 255, 255, 0.4);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  .container {
    display: flex;
    width: 46.5rem;
    height: 30rem;
    border-radius: 0.75rem;
    box-shadow: 0px 0px 36px 0px rgba(0, 0, 0, 0.5);
    background-image: url(${(props) => props.$image_url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    stroke-width: 1px;
    stroke: rgba(0, 0, 0, 0.1);

    z-index: 11;
  }
  .info {
    position: absolute;
    display: flex;
    width: fit-content;
    height: 1.875rem;
    flex-direction: column;
    justify-content: center;

    flex-shrink: 0;
    margin-left: 3.5rem;
    margin-top: 26.81rem;

    width: 41.5rem;
    height: 1.875rem;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #fff;
    text-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    font-family: Inter;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    z-index: 11;
  }
  .close {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    margin-left: 43.5rem;
    margin-top: 1.5rem;
  }
  .shadow {
    position: absolute;
    width: 46.5rem;
    height: 15rem;
    margin-top: 15rem;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
    border-radius: 0 0 0.75rem 0.75rem;
    z-index: 10;
  }
`;
