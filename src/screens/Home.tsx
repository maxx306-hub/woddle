import * as React from 'react';
import {View, ScrollView, StyleSheet, FlatList, Dimensions, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import HomeHeader from '../components/header/HomeHeader';
import MainCard from '../components/cards/MainCard';
import InfoCard from '../components/cards/InfoCard';
import AdCard from '../components/cards/AdCard';
import ActionCard from '../components/cards/ActionCard';
const { width } = Dimensions.get('window');

function HomeScreen() {

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isSwipping, setIsSwipping] = React.useState(false);
  const data = [
    {
      image: require('../../assets/images/people1.png'),
      name: 'John Doe',
      birthday: new Date(2022, 1, 1),
      gender: 'male',
    },
    {
      image: require('../../assets/images/people2.png'),
      name: 'Jane Smith',
      birthday: new Date(1985, 5, 15),
      gender: 'female',
    },
  ] as const;

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / width);
    setActiveIndex(currentIndex);
  };

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.sliderContainer}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={[styles.cardContainer, isSwipping && styles.paddingDuringSwipe]}>
                <MainCard
                  image={item.image}
                  name={item.name}
                  birthday={item.birthday}
                  gender={item.gender}
                />
              </View>
            )}
            onScroll={onScroll}
            onScrollBeginDrag={() => setIsSwipping(true)}
            onScrollEndDrag={() => setIsSwipping(false)}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            pagingEnabled
            decelerationRate="fast"
          />
          <View style={styles.dotsContainer}>
            {data.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  activeIndex === index ? styles.activeDot : styles.inactiveDot,
                ]}
              />
            ))}
          </View>
        </View>
        <View style={styles.infoCardsContainer}>
          <View style={styles.infoCardRow}>
            <InfoCard
              title="Weight"
              mainText={'15 lbs \n3 oz'}
              time="1:00 PM Dec 05 2023"
              background="#FFF5DC"
            />
            <InfoCard
              title="Diaper"
              mainText="Pee Medium"
              time="2h 55m ago"
              background="#EFF1FF"
            />
          </View>
          <View style={styles.infoCardRow}>
            <InfoCard
              title="Feeding"
              mainText="Formula 5oz"
              time="2h 30m ago"
              background="#FFEEE7"
            />
            <InfoCard
              title="Sleep"
              mainText="2h 20m"
              time="5 hours ago"
              background="#F8EEFF"
            />
          </View>
        </View>
        <AdCard
          image={require('../../assets/images/ad.png')}
          onPress={() => {}}
        />
        <ActionCard
          image={require('../../assets/images/people2.png')}
          title="Milestones"
          text="Month 12"
          onPress={() => {}}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 60,
    backgroundColor: 'white',
  },
  infoCardsContainer: {
    paddingVertical: 20,
    gap: 20,
  },
  infoCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  cardContainer: {
    width: width - 40,
    paddingHorizontal: 0,
  },
  paddingDuringSwipe: {
    paddingHorizontal: 10,
  },
  sliderContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 10,
    gap: 6,
    flexDirection: 'row',
  },
  dot: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
  },
  activeDot: {
    backgroundColor: '#000',
  },
  inactiveDot: {
    backgroundColor: 'transparent',
  },
});

export default HomeScreen;
