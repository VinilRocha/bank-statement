import styled, { css } from 'styled-components';

const boxOutsideLine = css`
  content: '';
  display: block;
  position: absolute;
  width: 1px;
  height: 1rem;
  background: var(--border);
  left: 1.5rem;
`;

export const Container = styled.div`
  width: 100%;
  margin-top: 3rem;
`;
export const DashboardHeader = styled.div`
  display: flex;
  font-size: 0.875rem;
  color: var(--text-light);
  margin-bottom: 1.5rem;
  padding: 0 1rem;

  & span {
    width: 30%;
  }

  & p {
    &:nth-of-type(1) {
      width: 25%;
    }
    &:nth-of-type(2) {
      width: 30%;
      font-weight: bold;
      color: var(--primary);
    }
    &:nth-of-type(3) {
      width: 15%;
      text-align: right;
    }
  }
`;

export const StatementBox = styled.div`
  width: 100%;
  position: relative;
  padding: 1.75rem 1rem;
  border: 1px solid var(--border);
  border-radius: 1rem;
  margin-bottom: 4.313rem;
  color: var(--text);
  &:before {
    ${boxOutsideLine};
    top: -1rem;
  }
  &:after {
    ${boxOutsideLine};
    bottom: -1rem;
  }
`;

export const StatementDate = styled.span`
  display: block;
  position: absolute;
  left: 1rem;
  top: -2.5rem;
  font-size: 0.75rem;
  font-weight: bold;
`;

export const StatementBalance = styled.span`
  display: block;
  position: absolute;
  right: 1rem;
  bottom: -2.5rem;
  font-size: 0.75rem;
  & span {
    font-weight: bold;
  }
`;

export const StatementDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2,
  p {
    font-size: 1rem;
  }

  & + div {
    margin-top: 2rem;
  }

  div {
    display: flex;
    align-items: center;
    width: 30%;

    img {
      margin-right: 1rem;
    }
  }

  p {
    &:nth-of-type(1) {
      width: 25%;
    }
    &:nth-of-type(2) {
      width: 30%;
    }
    &:nth-of-type(3) {
      text-align: right;
      width: 15%;
    }

    &.debit {
      color: var(--blue);
      &:before {
        content: '+ ';
      }
    }
    &.credit {
      color: var(--red);
      &:before {
        content: '- ';
      }
    }
    &.refunded {
      text-decoration: line-through;
    }
  }
`;
