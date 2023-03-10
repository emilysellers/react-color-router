import React from 'react';
import { useParams } from 'react-router-dom';
import './Main.css';

export default function Main() {
  const { red, green, blue } = useParams();
  return (
    <main className="main-container" style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
      <h1>
        rgb({red}, {green}, {blue})
      </h1>
    </main>
  );
}
