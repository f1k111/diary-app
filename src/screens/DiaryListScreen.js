import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import DiaryCard from '../components/DiaryCard';

// Import gambar lokal dari assets
import happyIcon from '../../assets/moods/happy.png';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodSource: happyIcon, // Menggunakan gambar lokal
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodSource: { uri: 'https://picsum.photos/seed/focus/80' },
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodSource: { uri: 'https://picsum.photos/seed/calm/80' },
  },
  {
    id: 4,
    title: 'Belajar React Native',
    date: '2025-10-03',
    preview: 'Memahami cara kerja komponen, props, dan styling menggunakan Flexbox di Expo...',
    moodSource: { uri: 'https://picsum.photos/seed/code/80' },
  },
  {
    id: 5,
    title: 'Akhir Pekan Bersama Keluarga',
    date: '2025-10-02',
    preview: 'Makan malam bersama keluarga di luar, momen yang sangat menyenangkan dan berkesan...',
    moodSource: { uri: 'https://picsum.photos/seed/family/80' },
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>Buku Harian</Text>
      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodSource={entry.moodSource}
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
  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
});