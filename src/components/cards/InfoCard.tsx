import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface InfoCardProps {
  title: string;
  mainText: string;
  time: string;
  background: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  mainText,
  time,
  background,
}) => {
  return (
    <View style={[styles.card, {backgroundColor: background}]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.mainText}>{mainText}</Text>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'flex-start',
    gap: 15,
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14,
    color: 'black',
  },
  mainText: {
    fontFamily: 'Roboto',
    fontSize: 32,
    fontWeight: '300',
    lineHeight: 37.5,
    color: 'black',
  },
  time: {
    fontFamily: 'Roboto',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 12,
    textAlign: 'left',
    color: '#878585',
    marginTop: 'auto',
  },
});

export default InfoCard;
