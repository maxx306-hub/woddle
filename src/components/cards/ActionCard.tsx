import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import CircleArrowIcon from '../../../assets/icons/CircleArrowIcon';

interface ActionCardProps {
  image: ImageSourcePropType;
  title: string;
  text: string;
  onPress: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({
  image,
  title,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.9}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
        <CircleArrowIcon style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 247,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 20,
  },
  image: {
    width: '100%',
    height: 148,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    height: 99, // 247 - 148
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    textAlign: 'left',
    marginBottom: 4,
    color: 'black',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 32,
    fontWeight: '300',
    lineHeight: 38,
    textAlign: 'left',
    color: 'black',
  },
  icon: {
    marginLeft: 16,
  },
});

export default ActionCard;
