import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from 'react';
import { api } from '../services/api';

interface StatementDetail {
  actor: string;
  amount: number;
  dateEvent: string;
  status: 'COMPLETED' | 'REFUNDED' | 'PENDING';
  source: 'PAYMENT' | 'TRANSFER';
  entry: 'DEBIT' | 'CREDIT';
  scheduled: boolean;
}

interface Statement {
  amountTotal: number;
  date: string;
  items: StatementDetail[];
}

interface StatementContextData {
  statements: Statement[];
  listCreditStatement: () => void;
}

interface StatementProviderProps {
  children: ReactNode;
}

const StatementContext = createContext<StatementContextData>(
  {} as StatementContextData,
);

export function StatementProvider({ children }: StatementProviderProps) {
  const [statements, setStatements] = useState<Statement[]>([]);

  useEffect(() => {
    api.get('statement').then(response => setStatements(response.data.results));
  }, []);

  function listCreditStatement() {
    const newStatetements: Statement[] = [];

    statements.forEach(({ amountTotal, date, items }) => {
      const filteredStatement = items.filter(item => item.entry === 'CREDIT');

      if (filteredStatement.length > 0) {
        const filteredObject = {
          amountTotal,
          date,
          items: filteredStatement,
        };

        newStatetements.push(filteredObject);
      }
    });

    console.log(newStatetements);
    setStatements(newStatetements);
  }

  return (
    <StatementContext.Provider value={{ statements, listCreditStatement }}>
      {children}
    </StatementContext.Provider>
  );
}

export function useStatement() {
  const context = useContext(StatementContext);

  return context;
}
