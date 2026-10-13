import React from 'react';
import { StyleSheet, ScrollView, Text, View, Image } from 'react-native';
import DiaryCard from '../components/DiaryCard';

// Import gambar lokal
import happyIcon from '../../assets/moods/happy.png';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodSource: happyIcon,
    borderColor: '#facc15', // Kuning
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodSource: { uri: 'https://picsum.photos/seed/focus/80' },
    borderColor: '#3b82f6', // Biru
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodSource: { uri: 'https://picsum.photos/seed/calm/80' },
    borderColor: '#22c55e', // Hijau
  },
  {
    id: 4,
    title: 'Makan Malam Spesial',
    date: '2025-10-03',
    preview: 'Mencoba resep baru untuk makan malam. Rasanya ternyata sangat enak!',
    moodSource: { uri: 'https://picsum.photos/seed/dinner/80' },
    borderColor: '#ef4444', // Merah
  },
  {
    id: 5,
    title: 'Hujan Deras',
    date: '2025-10-02',
    preview: 'Kehujanan saat pulang. Sekarang istirahat sambil minum teh hangat.',
    moodSource: { uri: 'https://picsum.photos/seed/rain/80' },
    borderColor: '#9ca3af', // Abu-abu
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header dengan Title dan Avatar */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Buku Harian</Text>
        <Image
          source={{ uri: 'https://picsum.photos/seed/avatar/100' }} // Avatar pengguna
          style={styles.avatar}
        />
      </View>

      {/* Daftar Kartu */}
      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodSource={entry.moodSource}
          borderColor={entry.borderColor}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});