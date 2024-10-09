import * as React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/Home.tsx';
import HomeTabIcon from './assets/icons/HomeTabIcon';
import LogoTabIcon from './assets/icons/LogoTabIcon';
import MoreIcon from './assets/icons/MoreIcon';
import {SafeAreaView} from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator();

const CustomTabBar = ({
  state,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let icon;
        if (route.name === 'Home') {
          icon = <HomeTabIcon color={isFocused ? '#007AFF' : '#8E8E93'} />;
        } else if (route.name === 'Logo') {
          icon = <LogoTabIcon />;
        } else if (route.name === 'More') {
          icon = <MoreIcon color={isFocused ? '#007AFF' : '#8E8E93'} />;
        }

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.tabItem, route.name === 'Logo' && styles.centerTab]}
          >
            <View style={styles.tabItemContent}>
              {icon}
              <Text style={styles.tabItemText}>{route.name !== 'Logo' && route.name}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={CustomTabBar}
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen
            name="Logo"
            component={HomeScreen}
            options={{tabBarButton: () => null}}
          />
          <Tab.Screen name="More" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
    height: 100,
    borderTopWidth: 1,
    borderTopColor: '#FEF9F5',
    backgroundColor: '#FEF9F5',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerTab: {
    position: 'absolute',
    bottom: 50,
    left: '50%',
    marginLeft: -50,
    width: 102,
    height: 102,
    borderRadius: 100,
    backgroundColor: '#FEF9F5',
    borderColor: '#FEF9F5',
    borderWidth: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  tabItemContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItemText: {
    fontFamily: 'Cabin-Regular',
    fontWeight: 700,
    fontSize: 10,
    lineHeight: 20,
  },
});
