import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const LabRoomClues = () => {
  const navigate = useNavigate();

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/실험실.png')" }}>
      <h2>실험실 단서</h2>
      <img src="/images/clue6.png" alt="Clue 7" className="clue-image" />
      <img src="/images/clue7.png" alt="Clue 8" className="clue-image" />
      <button onClick={() => navigate('/')}>뒤로 가기</button>
    </div>
  );
};

export default LabRoomClues;
