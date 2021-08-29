import { GlobalStyle } from './styles/global';
import { StatementProvider } from './hooks/useStatement';

import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { DashboardHeader } from './components/Commons/styles';
import { Search } from './components/Search';
import { Dashboard } from './components/Dashboard';

export function App() {
  return (
    <StatementProvider>
      <Header />
      <DashboardHeader>
        <Tabs />
        <Search />
      </DashboardHeader>
      <Dashboard />
      <GlobalStyle />
    </StatementProvider>
  );
}
