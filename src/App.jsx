import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/GlobalStyles'
import { theme } from './styles/theme'

import styled from 'styled-components'
import { getTheme } from './styles/ThemeUtils'

export const BigHeading = styled.h1`
  font-size: 128px;
  line-height: auto;
  color: ${getTheme('darkColor')};
  font-family: ${getTheme('serif')};
  font-style: italic;
  font-weight: 600;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
`

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <div style={{
        width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
      <BigHeading>Nath the Developer</BigHeading>
      </div>
    </ThemeProvider>
  )
}

export default App
