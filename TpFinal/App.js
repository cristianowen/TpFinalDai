import React from 'react';
import { View } from 'react-native';
import SoundPlayer from './TrackPlayer/SoundPlayer';
import CardVideo from './Components/CardVideo';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Camara from './Components/Camara';
import VibracionScreen from './Components/Vibracion';

export default function App() {
  return (
    <BrowserRouter>
      <View>
        <h1>5IA proyectos remix</h1>
        <View>
          <Link to="/video">Ver Video</Link>
        </View>
        <View>
          <Link to="/sound">Reproducir Sonido</Link>
        </View>
        <View>
          <Link to = "/camara">Abrir Camara</Link>
        </View>
        <View>
          <Link to = "/vibracion">Vibracion</Link>
        </View>


        <Routes>
          <Route path="/video" element={<CardVideo title="Título del video" description="Descripción del video. Puedes agregar más detalles aquí." />} />
          <Route path="/sound" element={<SoundPlayer />} />
          <Route path= "/camara" element ={<Camara/>}/>
          <Route path="/vibracion" element={<VibracionScreen />} />
          <Route path="/" element={<Navigate to="/video" />} />
        </Routes>
      </View>
    </BrowserRouter>
  );
}
