import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  Image,
} from 'react-native';
import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';
import { COLORS, SPACE, TYPO, BREAKPOINTS } from '../styles/tokens';

// Import gambar lokal dari tugas sebelumnya
import happyIcon from '../../assets/moods/happy.png';

const DATA = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit...',
    body: 'Hari ini aku bangun lebih pagi jam 05:00 WIB dan berjalan kaki 20 menit di sekitar kompleks. Udara pagi terasa sangat sejuk dan menyegarkan pikiran sebelum memulai aktivitas.',
    moodSource: happyIcon, // Tetap pakai lokal
    heroUri: 'https://picsum.photos/seed/happyhero/800/450',
    borderColor: '#facc15',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim...',
    body: 'Berhasil menyelesaikan modul praktikum Mobile Programming tepat waktu dan berdiskusi bersama teman sekelas. Banyak sekali insight baru mengenai React Native dan Layout Responsif.',
    moodUri: 'https://picsum.photos/seed/focus/200',
    heroUri: 'https://picsum.photos/seed/focushero/800/450',
    borderColor: '#3b82f6',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit...',
    body: 'Menghabiskan waktu sore di taman kota sambil membaca buku favorit. Warna langit senja hari ini sangat indah dengan perpaduan warna oranye dan keunguan.',
    moodUri: 'https://picsum.photos/seed/calm/200',
    heroUri: 'https://picsum.photos/seed/calmhero/800/450',
    borderColor: '#22c55e',
  },
  {
    id: 4,
    title: 'Makan Malam Spesial',
    date: '2025-10-03',
    preview: 'Mencoba resep baru untuk makan malam...',
    body: 'Mencoba resep masakan baru bersama keluarga untuk makan malam. Hasilnya ternyata sangat enak dan semua orang menyukainya!',
    moodUri: 'https://picsum.photos/seed/dinner/200',
    heroUri: 'https://picsum.photos/seed/dinnerhero/800/450',
    borderColor: '#ef4444',
  },
  {
    id: 5,
    title: 'Hujan Deras',
    date: '2025-10-02',
    preview: 'Kehujanan saat pulang. Sekarang istirahat...',
    body: 'Sore hari diguyur hujan cukup deras saat perjalanan pulang kampus. Sampai di rumah langsung mandi air hangat dan istirahat sambil minum teh hangat.',
    moodUri: 'https://picsum.photos/seed/rain/200',
    heroUri: 'https://picsum.photos/seed/rainhero/800/450',
    borderColor: '#9ca3af',
  },
];

export default function DiaryListScreen() {
  const { width } = useWindowDimensions();
  const twoCols = width >= BREAKPOINTS.tablet;
  const [selected, setSelected] = useState(null);

  const keyForCols = useMemo(() => (twoCols ? 'grid2' : 'list1'), [twoCols]);

  const renderItem = ({ item }) => (
    <View style={[styles.itemWrap, twoCols && styles.itemWrap2]}>
      <DiaryCard
        title={item.title}
        date={item.date}
        preview={item.preview}
        moodUri={item.moodUri}
        moodSource={item.moodSource}
        borderColor={item.borderColor}
        variant={twoCols ? 'grid' : 'list'}
        onPress={() => setSelected(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Buku Harian</Text>
        <Image
          source={{ uri: 'https://picsum.photos/seed/avatar/100' }}
          style={styles.avatar}
        />
      </View>

      <FlatList
        key={keyForCols}
        data={DATA}
        numColumns={twoCols ? 2 : 1}
        keyExtractor={(it) => String(it.id)}
        renderItem={renderItem}
        columnWrapperStyle={twoCols ? { gap: SPACE.m } : undefined}
        contentContainerStyle={{
          padding: SPACE.l,
          gap: SPACE.m,
        }}
        ListEmptyComponent={
          <Text style={styles.empty}>Belum ada entri.</Text>
        }
      />

      <DiaryDetailModal
        visible={!!selected}
        entry={selected}
        onClose={() => setSelected(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.surface },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACE.l,
    paddingTop: SPACE.l,
    paddingBottom: SPACE.s,
  },
  header: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    color: COLORS.text,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  itemWrap: { flex: 1 },
  itemWrap2: { flex: 1 / 2 },
  empty: { textAlign: 'center', color: COLORS.muted, marginTop: 40 },
});