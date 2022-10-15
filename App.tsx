import { ThemeProvider } from 'styled-components';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import theme from './src/theme';

import { Home } from './src/screens/Home';
import { ActivityIndicator } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}

