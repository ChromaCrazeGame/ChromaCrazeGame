import React from 'react';

const PlayerSidebar = ({ name, picture }) => {
  return (
    <div className="sidebar_player">
      <img src={picture} />
      <p>{name}</p>
    </div>
  );
};

export default PlayerSidebar;
