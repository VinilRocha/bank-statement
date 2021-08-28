import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 4rem;

  input {
    color: var(--text);
    background-color: var(--gray1);
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    padding-left: 3rem;
    border: none;
    border-radius: 1rem;

    &::placeholder {
      color: var(--text-light);
    }
  }

  img {
    position: absolute;
    z-index: 1;
    left: 2rem;
    top: 1.4rem;
  }
`;
