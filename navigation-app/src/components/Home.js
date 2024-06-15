import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    const unlockedFirst = localStorage.getItem('secretRoomFirstUnlocked') === 'true';
    const unlockedSecond = localStorage.getItem('secretRoomSecondUnlocked') === 'true';

    if (path === '???' || path === '비밀의 방') {
      if (unlockedFirst) {
        if (unlockedSecond) {
          navigate(`/room/${path}/next`);
        } else {
          navigate(`/room/비밀의 방/second`);
        }
      } else {
        navigate(`/room/${path}`);
      }
    } else {
      const unlocked = localStorage.getItem(path);
      if (unlocked === 'true') {
        navigate(`/room/${path}/next`);
      } else {
        navigate(`/room/${path}`);
      }
    }
  };

  const secretRoomUnlocked = localStorage.getItem('secretRoomFirstUnlocked') === 'true';

  return (
    <div className="container">
      <p className="subtitle">콘크리트 주토피아 시즌2</p>
      <h1>조사구역</h1>
      <button className="reset-button" onClick={() => navigate('/reset-password')}>암호 초기화</button>
      <div className="grid-container">
        <div className="grid-item red" onClick={() => handleButtonClick('외부인의 방')}>외부인의 방</div>
        <div className="grid-item red" onClick={() => handleButtonClick('보급실')}>보급실</div>
        <div className="grid-item yellow" onClick={() => handleButtonClick('실험실')}>실험실</div>
        <div className="grid-item yellow" onClick={() => handleButtonClick('휴게실')}>휴게실</div>
        <div className="grid-item green" onClick={() => handleButtonClick('내부 광장')}>내부 광장</div>
        <div className="grid-item green" onClick={() => handleButtonClick('통제실')}>통제실</div>
        <div className="grid-item blue" onClick={() => handleButtonClick('식당')}>식당</div>
        <div className="grid-item blue" onClick={() => handleButtonClick(secretRoomUnlocked ? '비밀의 방' : '???')}>
          {secretRoomUnlocked ? '비밀의 방' : '???'}
        </div>
      </div>
    </div>
  );
};

export default Home;
