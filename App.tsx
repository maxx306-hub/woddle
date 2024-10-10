import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home.tsx';
import HomeTabIcon from './assets/icons/HomeTabIcon';
import LogoTabIcon from './assets/icons/LogoTabIcon';
import MoreIcon from './assets/icons/MoreIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CustomTabBar } from './src/components/tab/CustomTabBar.tsx';

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            tabBar={CustomTabBar}
            screenOptions={{
              headerShown: false,
            }}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <HomeTabIcon color={focused ? '#007AFF' : '#8E8E93'} />
                ),
              }}
            />
            <Tab.Screen
              name="Logo"
              component={HomeScreen}
              options={{
                tabBarIcon: () => <LogoTabIcon />,
              }}
            />
            <Tab.Screen
              name="More"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <MoreIcon color={focused ? '#007AFF' : '#8E8E93'} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
