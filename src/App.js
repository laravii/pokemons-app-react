import './index.css';

import { Container } from './styles';
import Logo from './components/logo';
import { Search } from './components/Search';

function App() {
  return (
    <Container>
      <Logo />
      <Search />
    </Container>
  );
}

export default App;
