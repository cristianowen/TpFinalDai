import React from 'react';
import { View, StyleSheet } from 'react-native';
import SoundPlayer from './TrackPlayer/SoundPlayer';
import CardVideo from './Components/CardVideo';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='*' element={<h1>Not Found</h1>} ></Route>
      </Routes>
    </BrowserRouter>
    <View>
      <h1>5IA proyectos remix</h1>
      <View>
        <CardVideo
          title="Título del video"
          description="Descripción del video. Puedes agregar más detalles aquí."/>
      </View>
      <View >
        <SoundPlayer />
      </View>
    </View>
    </>
  );
}
