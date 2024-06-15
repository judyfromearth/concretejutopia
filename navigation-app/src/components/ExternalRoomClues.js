import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ExternalRoomClues = () => {
  const navigate = useNavigate();

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/외부인의 방.png')" }}>
      <h2>외부인의 방 단서</h2>
      <img src="/images/clue1.png" alt="Clue 1" className="clue-image" />
      <img src="/images/clue2.png" alt="Clue 2" className="clue-image" />
      <img src="/images/clue3.png" alt="Clue 2" className="clue-image" />
      <button onClick={() => navigate('/')}>뒤로 가기</button>
    </div>
  );
};

export default ExternalRoomClues;
