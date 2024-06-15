import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ExternalRoom = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unlocked = localStorage.getItem('externalRoomUnlocked');
    if (unlocked === 'true') {
      setIsUnlocked(true);
      navigate('/room/외부인의 방/next');
    }
  }, [navigate]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '42195') {
      localStorage.setItem('externalRoomUnlocked', 'true');
      setIsUnlocked(true);
      navigate('/room/외부인의 방/next');
    } else {
      setError('Invalid password. Please try again.');
    }
  };

  if (isUnlocked) {
    return (
      <div className="room-container" style={{ backgroundImage: "url('/images/외부인의 방.png')" }}>
        <h2>외부인의 방</h2>
        <p>This room is unlocked.</p>
        {/* 추가 콘텐츠를 여기에 삽입할 수 있습니다. */}
      </div>
    );
  }

  return (
    <div className="room-container" style={{ backgroundImage: "url('/images/외부인의 방.png')" }}>
      <h2>외부인의 방</h2>
      <img src="/images/001.png" alt="Hint" className="hint-image" />
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="암호를 입력하세요"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">조사하기</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ExternalRoom;
