import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity, Text} from 'react-native';
import ArchiveIcon from '../../../assets/icons/ArchiveIcon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const HomeHeader: React.FC = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, {marginTop: insets.top}]}>
      <Text style={styles.title}>Woddle</Text>
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={() => {}}>
          <ArchiveIcon width={32} height={28} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.avatarContainer} onPress={() => {}}>
          <Image
            source={require('../../../assets/images/avatar.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Ribeye-Regular',
    fontSize: 40,
    fontWeight: '400',
    letterSpacing: -0.5,
  },
  logo: {
    width: 160,
    height: 40,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginLeft: 16,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});

export default HomeHeader;
