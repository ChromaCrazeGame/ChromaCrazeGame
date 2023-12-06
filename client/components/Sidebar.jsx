import React from 'react';
import { useSelector } from 'react-redux';
import '../styles.css';
import PlayerSidebar from './PlayerSidebar';

const Sidebar = () => {
  const players = useSelector(store => store.players);
  const playerListItems = players.map((player, i) => {
    return (
      <PlayerSidebar
        key={`player-${i}`}
        name={player.name}
        picture={player.picture}
      />
    );
  });

  return (
    <div className="sidebar">
      Players Online:
      {playerListItems}
    </div>
  );
};

export default Sidebar;

