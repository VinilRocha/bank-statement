import { Container } from './styles';
import SearchIcon from '../../assets/search-icon.svg';

export function Search() {
  return (
    <Container>
      <img src={SearchIcon} alt="Pesquisar" />
      <input type="text" placeholder="Pesquisar" />
    </Container>
  );
}
