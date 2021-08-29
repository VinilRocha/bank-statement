import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useContext,
} from 'react';
import { api } from '../services/api';
import { handleStatementFilter } from '../utils/handleFilterStatement';

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
  searchedStatements: Statement[];
  hasFilterActive: boolean;
  hasSearchActive: boolean;
  getFilteredStatements: (filterTerm: string) => void;
  getSearchedTerm: (filterTerm: string) => void;
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
  const [searchedStatements, setSearchedStatements] = useState<Statement[]>([]);
  const [hasFilterActive, setHasFilterActive] = useState(false);
  const [hasSearchActive, setHasSearchActive] = useState(false);

  useEffect(() => {
    api.get('statement').then(response => setStatements(response.data.results));
  }, []);

  function getFilteredStatements(filterTerm: string) {
    const newStatetements: Statement[] = [];

    if (filterTerm === 'all') {
      return setHasFilterActive(false);
    }

    setHasFilterActive(true);
    handleStatementFilter(statements, newStatetements, filterTerm);

    return setFilteredStatements(newStatetements);
  }

  function getSearchedTerm(searchTerm: string) {
    const newStatetements: Statement[] = [];

    if (searchTerm === '') {
      return setHasSearchActive(false);
    }

    const statementToSearchIn = hasFilterActive
      ? filteredStatements
      : statements;

    setHasSearchActive(true);
    handleStatementFilter(statementToSearchIn, newStatetements, searchTerm);

    return setSearchedStatements(newStatetements);
  }

  return (
    <StatementContext.Provider
      value={{
        statements,
        filteredStatements,
        searchedStatements,
        hasFilterActive,
        hasSearchActive,
        getFilteredStatements,
        getSearchedTerm,
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
