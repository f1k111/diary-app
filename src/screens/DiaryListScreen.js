import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, useWindowDimensions, Image } from 'react-native';
import { COLORS, SPACE, TYPO, BREAKPOINTS } from '../styles/tokens';
import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';
import SearchBar from '../components/SearchBar';
import EntryForm from '../components/EntryForm';

import happyIcon from '../../assets/moods/happy.png';

const INITIAL_ENTRIES = [
  { id: 1, title: 'Pagi yang Tenang', date: '2026-10-18', preview: 'Jalan pagi 20 menit dan menikmati udara segar.', body: 'Hari ini aku bangun lebih pagi dan berjalan kaki selama 20 menit.', moodImage: happyIcon, borderColor: '#facc15' },
  { id: 2, title: 'Produktif di Kampus', date: '2026-10-17', preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim.', body: 'Hari ini cukup produktif karena beberapa target perkuliahan selesai.', moodImage: { uri: 'https://picsum.photos/seed/focus/200' }, borderColor: '#3b82f6' },
  { id: 3, title: 'Senja di Taman', date: '2026-10-16', preview: 'Membaca buku sambil menikmati suasana senja.', body: 'Sore ini saya menikmati waktu di taman sambil membaca buku.', moodImage: { uri: 'https://picsum.photos/seed/calm/200' }, borderColor: '#22c55e' },
];

export default function DiaryListScreen() {
  const { width } = useWindowDimensions();
  const twoCols = width >= BREAKPOINTS.tablet;
  
  const [entries, setEntries] = useState(INITIAL_ENTRIES);
  const [query, setQuery] = useState('');
  const [likedIds, setLikedIds] = useState(new Set());
  const [selected, setSelected] = useState(null);

  const keyForCols = useMemo(() => (twoCols ? 'grid2' : 'list1'), [twoCols]);

  const filtered = useMemo(() => {
    if (!query.trim()) return entries;
    const q = query.toLowerCase();
    return entries.filter((entry) => entry.title.toLowerCase().includes(q) || entry.preview.toLowerCase().includes(q) || entry.date.toLowerCase().includes(q));
  }, [entries, query]);

  const toggleLike = (id) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const addEntry = (newEntry) => setEntries((prev) => [newEntry, ...prev]);

  const renderItem = ({ item }) => (
    <View style={[styles.itemWrap, twoCols && styles.itemWrap2]}>
      <DiaryCard
        title={item.title} date={item.date} preview={item.preview} moodImage={item.moodImage} borderColor={item.borderColor} variant={twoCols ? 'grid' : 'list'}
        liked={likedIds.has(item.id)} onToggleLike={() => toggleLike(item.id)} onPress={() => setSelected(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Buku Harian</Text>
        <Image source={{ uri: 'https://staticg.sportskeeda.com/editor/2023/02/a4ef1-16773936363178-1920.jpg' }} style={styles.avatar} />
      </View>

      {/* Komponen SearchBar dan EntryForm diletakkan di luar FlatList agar selalu muncul */}
      <SearchBar onChange={setQuery} />
      <EntryForm onSubmit={addEntry} />

      <FlatList
        key={keyForCols} data={filtered} numColumns={twoCols ? 2 : 1} keyExtractor={(item) => String(item.id)} renderItem={renderItem}
        columnWrapperStyle={twoCols ? { gap: SPACE.m } : undefined} contentContainerStyle={styles.listContent}
        ListEmptyComponent={<Text style={styles.empty}>Belum ada entri.</Text>}
      />
      <DiaryDetailModal visible={!!selected} entry={selected} onClose={() => setSelected(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.surface },
  headerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: SPACE.l, paddingTop: SPACE.l, paddingBottom: SPACE.s },
  header: { fontSize: TYPO.h1, fontWeight: '700', color: COLORS.text },
  avatar: { width: 45, height: 45, borderRadius: 25 },
  listContent: { paddingHorizontal: SPACE.l, paddingBottom: SPACE.xl, gap: SPACE.m },
  itemWrap: { flex: 1 }, itemWrap2: { flex: 1 / 2 }, empty: { textAlign: 'center', color: COLORS.muted, marginTop: 40 },
});