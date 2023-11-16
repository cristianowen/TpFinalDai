import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import VideoPlayer from './VideoPlayer'; // Importa el componente VideoPlayer

const CardVideo = ({ title, description }) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handleCardPress = () => {
    setIsVideoVisible(true);
  };

  return (
    <>
      <TouchableOpacity onPress={handleCardPress} style={styles.card}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </TouchableOpacity>
      {isVideoVisible && <VideoPlayer onClose={() => setIsVideoVisible(false)} />}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 6,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
    color: '#888',
  },
});

export default CardVideo;
