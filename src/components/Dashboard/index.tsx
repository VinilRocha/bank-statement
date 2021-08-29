import { useState, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

import { useStatement, Statement } from '../../hooks/useStatement';

import {
  handleTransaction,
  handleTransactionIcon,
  handleTransactionValueType,
} from '../../utils/handleTransaction';
import { formatReal } from '../../utils/moneyFormat';

import { Wrapper } from '../Commons/styles';
import {
  Container,
  DashboardHeader,
  StatementBalance,
  StatementBox,
  StatementDate,
  StatementDetails,
} from './styles';

export function Dashboard() {
  const { statements, filteredStatements, hasFilterActive } = useStatement();
  const [statement, setStatement] = useState<Statement[]>(statements);

  useEffect(() => {
    if (hasFilterActive) {
      setStatement(filteredStatements);
    } else {
      setStatement(statements);
    }
  }, [statements, filteredStatements, hasFilterActive]);

  return (
    <Wrapper>
      <Container>
        <DashboardHeader>
          <span />
          <p>Tipo de Transação</p>
          <p>Data</p>
          <p>Valor</p>
        </DashboardHeader>

        {statement.map(({ amountTotal, date, items }) => (
          <StatementBox key={date}>
            <StatementDate>{moment(date).format('DD MMMM')}</StatementDate>

            {items.map(
              ({ actor, dateEvent, amount, entry, source, status }) => (
                <StatementDetails key={`${actor}${dateEvent}`}>
                  <div>
                    <img
                      src={handleTransactionIcon(status)}
                      alt="Statement Icon"
                    />
                    <h2>{actor}</h2>
                  </div>
                  <p>{handleTransaction({ status, source, entry })}</p>
                  <p>{moment(dateEvent).format('DD MMMM YYYY - HH:mm')}</p>
                  <p className={handleTransactionValueType(status, entry)}>
                    {formatReal(amount)}
                  </p>
                </StatementDetails>
              ),
            )}

            <StatementBalance>
              saldo do dia <span> {formatReal(amountTotal)}</span>
            </StatementBalance>
          </StatementBox>
        ))}
      </Container>
    </Wrapper>
  );
}
