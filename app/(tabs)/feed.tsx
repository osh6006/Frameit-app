import FeedItem from '@/components/feed/feed-item';
import { generateFeeds } from '@/lib/faker';
import { FlatList, StyleSheet, View } from 'react-native';

export default function FeedScreen() {
  const fakerData = generateFeeds(10);

  return (
    <View style={styles.container}>
      <FlatList
        data={fakerData}
        keyExtractor={(item) => item.id}
        renderItem={(info) => <FeedItem imageSrc={info.item.image} />}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 13,
    paddingHorizontal: 16,
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
});
