import { styled } from "styled-components";

const FooterStyle = styled.footer`
  display: flex;
  /* width: 80rem; */
  height: 3.625rem;
  padding: 0.6875rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;

  margin-top: 1.5rem;

  div {
    display: flex;
    width: fit-content;
    height: 1.125rem;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;

    color: #888;
    font-family: Inter;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 88.023%;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div>개인정보 처리방침 | 이용 약관</div>
      <div>All rights reserved @ Codestates</div>
    </FooterStyle>
  );
};

export default Footer;
