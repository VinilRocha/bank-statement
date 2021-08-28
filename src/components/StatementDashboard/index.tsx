import {
  Container,
  DashboardHeader,
  StatementBalance,
  StatementBox,
  StatementDate,
  StatementDetails,
} from './styles';
import ReceivedIcon from '../../assets/received-icon.svg';
import ReversedIcon from '../../assets/reversed-icon.svg';
import ScheduledIcon from '../../assets/scheduled-icon.svg';
import { Wrapper } from '../Commons/styles';

export function StatementDashboard() {
  return (
    <Wrapper>
      <Container>
        <DashboardHeader>
          <span />
          <p>Tipo de Transação</p>
          <p>Data</p>
          <p>Valor</p>
        </DashboardHeader>

        <StatementBox>
          <StatementDate>29 de Agosto</StatementDate>

          <StatementDetails>
            <div>
              <img src={ReceivedIcon} alt="Statement Icon" />
              <h2>Lucas Vallim da Costa</h2>
            </div>
            <p>Transferência recebida</p>
            <p>Hoje - 12 Jun 2020 - 17:35</p>
            <p className="debit">R$ 320,00</p>
          </StatementDetails>

          <StatementDetails>
            <div>
              <img src={ReversedIcon} alt="Statement Icon" />
              <h2>Lucas Vallim da Costa</h2>
            </div>
            <p>Transferência recebida</p>
            <p>12 Jun 2020 - 17:35</p>
            <p className="credit">R$ 320,00</p>
          </StatementDetails>

          <StatementBalance>
            saldo do dia <span>R$ 3.110,08</span>
          </StatementBalance>
        </StatementBox>

        <StatementBox>
          <StatementDate>29 de Agosto</StatementDate>
          <StatementDetails>
            <div>
              <img src={ScheduledIcon} alt="Statement Icon" />
              <h2>Lucas Vallim da Costa</h2>
            </div>
            <p>Transferência recebida</p>
            <p>12 Jun 2020 - 17:35</p>
            <p className="refunded"> R$ 320,00</p>
          </StatementDetails>
          <StatementBalance>
            saldo do dia <span>R$ 3.110,08</span>
          </StatementBalance>
        </StatementBox>
      </Container>
    </Wrapper>
  );
}
