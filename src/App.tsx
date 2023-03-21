import { Outlet } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Poppins';
    font-weight: 500;
  }
`;

function App() {
  return (
    <>
      <Outlet />
      <GlobalStyle />
    </>
  );
}

export default App;
