import styled from 'styled-components';

export const Container = styled.div`
  button {
    font-size: 1rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    border-radius: 2rem;
    height: 2rem;
    color: var(--primary);
    background-color: #fff;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: var(--blue-soft);
    }

    &.active {
      color: #fff;
      background-color: var(--primary);
    }

    & + button {
      margin-left: 1rem;
    }
  }
`;
