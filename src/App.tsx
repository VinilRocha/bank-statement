import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { DashboardHeader } from './components/Commons/styles';
import { Search } from './components/Search';
import { StatementDashboard } from './components/StatementDashboard';

export function App() {
  return (
    <>
      <Header />
      <DashboardHeader>
        <Tabs />
        <Search />
      </DashboardHeader>
      <StatementDashboard />
      <GlobalStyle />
    </>
  );
}
