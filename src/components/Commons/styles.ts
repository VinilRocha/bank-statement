import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1035px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
`;

export const DashboardHeader = styled(Wrapper)`
  justify-content: space-between;

  div {
    display: flex;
  }

  div:nth-child(2) {
    width: 60%;
    padding-left: 1rem;
  }
`;
