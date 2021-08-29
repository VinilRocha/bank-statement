import { useStatement } from '../../hooks/useStatement';
import { Container } from './styles';

export function Tabs() {
  const { listCreditStatement } = useStatement();

  return (
    <Container>
      <button type="button" className="active">
        Tudo
      </button>
      <button type="button" onClick={listCreditStatement}>
        Entrada
      </button>
      <button type="button">Saída</button>
      <button type="button">Futuro</button>
    </Container>
  );
}
