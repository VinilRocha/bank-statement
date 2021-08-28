import { Container } from './styles';

export function Tabs() {
  return (
    <Container>
      <button type="button" className="active">
        Tudo
      </button>
      <button type="button">Entrada</button>
      <button type="button">Saída</button>
      <button type="button">Futuro</button>
    </Container>
  );
}
