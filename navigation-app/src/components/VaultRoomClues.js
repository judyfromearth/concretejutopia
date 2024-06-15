import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const VaultRoomClues = () => {
  const navigate = useNavigate();

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/보급실.png')" }}>
      <h2>보급실</h2>
      <img src="/images/clue4.png" alt="Clue 3" className="clue-image" />
      <img src="/images/clue5.png" alt="Clue 4" className="clue-image" />
      <button onClick={() => navigate('/')}>뒤로 가기</button>
    </div>
  );
};

export default VaultRoomClues;
