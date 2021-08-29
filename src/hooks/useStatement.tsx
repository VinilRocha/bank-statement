import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from 'react';
import { api } from '../services/api';

export interface StatementDetail {
  actor: string;
  amount: number;
  dateEvent: string;
  status: 'COMPLETED' | 'REFUNDED' | 'PENDING';
  source: 'PAYMENT' | 'TRANSFER';
  entry: 'DEBIT' | 'CREDIT';
  scheduled: boolean;
}

export interface Statement {
  amountTotal: number;
  date: string;
  items: StatementDetail[];
}

interface StatementContextData {
  statements: Statement[];
  filteredStatements: Statement[];
  hasFilterActive: boolean;
  getFilteredStatements: (filter: string) => void;
}

interface StatementProviderProps {
  children: ReactNode;
}

const StatementContext = createContext<StatementContextData>(
  {} as StatementContextData,
);

export function StatementProvider({ children }: StatementProviderProps) {
  const [statements, setStatements] = useState<Statement[]>([]);
  const [filteredStatements, setFilteredStatements] = useState<Statement[]>([]);
  const [hasFilterActive, setHasFilterActive] = useState(false);

  useEffect(() => {
    api.get('statement').then(response => setStatements(response.data.results));
  }, []);

  function getFilteredStatements(filter: string) {
    if (filter === 'all') {
      setHasFilterActive(false);
    } else {
      setHasFilterActive(true);
      const newStatetements: Statement[] = [];

      statements.forEach(({ amountTotal, date, items }) => {
        function handleFilter(item: { scheduled: boolean; entry: string }) {
          if (filter === 'scheduled') {
            return item.scheduled === true;
          }
          return item.entry === filter;
        }
        const filteredStatement = items.filter(handleFilter);

        if (filteredStatement.length > 0) {
          const filteredObject = {
            amountTotal,
            date,
            items: filteredStatement,
          };

          newStatetements.push(filteredObject);
        }
      });

      setFilteredStatements(newStatetements);
    }
  }

  return (
    <StatementContext.Provider
      value={{
        statements,
        filteredStatements,
        hasFilterActive,
        getFilteredStatements,
      }}
    >
      {children}
    </StatementContext.Provider>
  );
}

export function useStatement() {
  const context = useContext(StatementContext);

  return context;
}
