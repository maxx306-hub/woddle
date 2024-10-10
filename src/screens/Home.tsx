import * as React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ActivityIndicator,
  Animated,
} from 'react-native';
import HomeHeader from '../components/header/HomeHeader';
import MainCard from '../components/cards/MainCard';
import AdCard from '../components/cards/AdCard';
import ActionCard from '../components/cards/ActionCard';
import InfoCard from '../components/cards/InfoCard';
import { useInfoCards, useSlideItems } from '../api/useHome.ts';

const { width } = Dimensions.get('window');

function HomeScreen() {
  const { data: infoCards, isLoading: isLoadingInfoCards } = useInfoCards();
  const { data: slideItems, isLoading: isLoadingSlideItems } = useSlideItems();

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isSwapping, setIsSwapping] = React.useState(false);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  const handleScrollState = (swipeStatus: boolean) => {
    setIsSwapping(swipeStatus);
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(offsetX / width);
    setActiveIndex(currentIndex);
  };

  if (isLoadingInfoCards || isLoadingSlideItems) {
    return (
      <ActivityIndicator size="large" color="#000" style={styles.loader} />
    );
  }

  return (
    <View style={styles.container}>
      <HomeHeader />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.sliderContainer}>
          <FlatList
            data={slideItems}
            renderItem={({ item }) => (
              <Animated.View
                style={[
                  styles.cardContainer,
                  isSwapping && { paddingHorizontal: 5 },
                ]}>
                <MainCard
                  image={item.image}
                  name={item.name}
                  birthday={item.birthday}
                  gender={item.gender}
                />
              </Animated.View>
            )}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false, listener: onScroll },
            )}
            onScrollBeginDrag={() => handleScrollState(true)}
            onScrollEndDrag={() => handleScrollState(false)}
            keyExtractor={({ name }) => name}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            pagingEnabled
            decelerationRate="fast"
          />
          <View style={styles.dotsContainer}>
            {slideItems?.map((_, index) => (
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
          {infoCards
            ?.reduce<(typeof infoCards)[number][][]>((rows, card, index) => {
              if (index % 2 === 0) {
                rows.push([]);
              }
              rows[rows.length - 1].push(card);
              return rows;
            }, [])
            .map((row, rowIndex) => (
              <View key={`row-${rowIndex}`} style={styles.infoCardRow}>
                {row.map((card, cardIndex) => (
                  <InfoCard
                    key={`card-${rowIndex}-${cardIndex}`}
                    title={card.title}
                    mainText={card.mainText}
                    time={card.time}
                    background={card.background}
                  />
                ))}
              </View>
            ))}
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
  loader: {
    marginTop: '70%',
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 60,
    backgroundColor: 'white',
    marginTop: 12,
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
