import { ThemeProvider } from 'styled-components';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import { Loading } from './src/components/Loading';

import theme from './src/theme';

import { Home } from './src/screens/Home';
import { StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent 
      />
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}

