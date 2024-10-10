import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as React from 'react';

export const CustomTabBar = ({
  state,
  navigation,
  descriptors,
}: BottomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index: number) => {
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

        let icon = descriptors[route.key].options.tabBarIcon;

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={[styles.tabItem, route.name === 'Logo' && styles.centerTab]}>
            <View style={styles.tabItemContent}>
              {icon
                ? icon({ focused: isFocused, color: 'white', size: 24 })
                : null}
              <Text style={styles.tabItemText}>
                {route.name !== 'Logo' && route.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

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
    fontWeight: '700',
    fontSize: 10,
    lineHeight: 20,
  },
});
