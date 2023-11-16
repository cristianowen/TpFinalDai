import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av';

export default function App() {
  const video = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayPause = () => {
    if (video.current) {
    if (isPlaying) {
        video.current.pauseAsync();
    } else {
        video.current.playAsync();
    }
    setIsPlaying(!isPlaying);
    }
};

const handleRestart = () => {
    if (video.current) {
      video.current.setPositionAsync(0); // Reinicia el video al principio
      video.current.playAsync();
      setIsPlaying(true);
    }
  };

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={{ uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={false}
        isLooping={false}
        useNativeControls
        style={styles.video}
        onPlaybackStatusUpdate={(status) => {
          if (status.isError) {
            console.error("Error de reproducción de video:", status.error);
          }
          setIsPlaying(status.isPlaying);
        }}
      />
      <View style={styles.controls}>
        <TouchableOpacity style={styles.button} onPress={handlePlayPause}>
          <Text>{isPlaying ? 'Pause' : 'Play'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Text>Restart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: 700,
    height: 500,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controls: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
});
