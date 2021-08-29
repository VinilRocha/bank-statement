import { useState } from 'react';
import { Container } from './styles';
import SearchIcon from '../../assets/search-icon.svg';
import { useStatement } from '../../hooks/useStatement';

export function Search() {
  const { getSearchedTerm } = useStatement();
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearchChange(value: string) {
    setSearchTerm(value);
    getSearchedTerm(value);
  }

  return (
    <Container>
      <img src={SearchIcon} alt="Pesquisar" />
      <input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={e =>
          handleSearchChange((e.target as HTMLButtonElement).value)
        }
      />
    </Container>
  );
}
