import React from 'react';
import {View, Image, Text, StyleSheet, ImageSourcePropType} from 'react-native';
import MaleGenderIcon from '../../../assets/icons/MaleGenderIcon';
import FemaleGenderIcon from '../../../assets/icons/FemaleGenderIcon';

interface MainCardProps {
  image: ImageSourcePropType;
  name: string;
  birthday: Date;
  gender: 'male' | 'female' | 'other';
}

const MainCard: React.FC<MainCardProps> = ({image, name, birthday, gender}) => {
  const calculateAge = (birthDate: Date) => {
    const today = new Date();
    const yearsDiff = today.getFullYear() - birthDate.getFullYear();
    const monthsDiff = today.getMonth() - birthDate.getMonth();
    const totalMonths = yearsDiff * 12 + monthsDiff;

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return `${years}y ${months}m`;
  };

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoBlock}>
        <View style={styles.ageGenderContainer}>
          <Text style={styles.name}>{name}</Text>

          {gender === 'male' && <MaleGenderIcon style={styles.genderIcon} />}
          {gender === 'female' && (
            <FemaleGenderIcon style={styles.genderIcon} />
          )}
        </View>
        <Text style={styles.age}>{calculateAge(birthday)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 223,
    borderRadius: 23,
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 23,
  },
  infoBlock: {
    position: 'absolute',
    width: 166,
    height: 54,
    top: 10,
    left: 10,
    borderRadius: 23,
    backgroundColor: 'rgba(243, 247, 250, 0.7)',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Cabin-Regular',
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
    marginBottom: 3,
  },
  ageGenderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  age: {
    fontSize: 14,
    color: '#333',
  },
  genderIcon: {
    width: 16,
    height: 16,
  },
});

export default MainCard;
