import React from 'react';
import { useParams } from 'react-router-dom';

export default function Main() {
  const { red, green, blue } = useParams();
  return (
    <main>
      <h1 style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
        rgb({red}, {green}, {blue})
      </h1>
    </main>
  );
}
