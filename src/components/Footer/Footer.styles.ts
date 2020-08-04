import styled from 'styled-components';

const FooterLineContainer = styled.div`
  margin: 0px 1em 0.5em 1em;
  border-top: 1px solid rgb(136, 126, 126);
`;

const FooterContentContainer = styled.div`
  margin: 0 75px 20px 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const FooterContentLink = styled.a`
  margin: 0.5em;
  font-size: 20px;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const FooterYear = styled.span`
  margin: 0.5em;
  font-size: 20px;
  text-align: center;
`;

const FooterMsg = styled.span`
  margin: 0.5em;
  font-size: 20px;
  font-style: italic;
  text-align: center;
`;

export {
  FooterLineContainer,
  FooterContentContainer,
  FooterContentLink,
  FooterYear,
  FooterMsg
}