import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  ImageBackground,
} from 'react-native';

interface AdCardProps {
  image: ImageSourcePropType;
  onPress: () => void;
}

const AdCard: React.FC<AdCardProps> = ({image, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 75,
  },
});

export default AdCard;
