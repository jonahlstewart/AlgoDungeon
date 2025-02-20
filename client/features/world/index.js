/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Player from '../../components/Player.jsx';
// import Enemy from '../../components/Enemy.jsx';
import Map from '../map/index.js';
import { SPRITE_SIZE } from '../../config/constants.js';

import { tiles } from '../../maps/map-1.js';
import store from '../../config/store';

function World(props) {
  store.dispatch({
    type: 'ADD_TILES',
    payload: {
      tiles,
    },
  });

  return (
    <div
      style={{
        position: 'relative',
        width: `${SPRITE_SIZE * 28}px`,
        height: `${SPRITE_SIZE * 18}px`,
        margin: '20px auto',
      }}
    >
      <Map tiles={tiles} />
      <Player />
      {/* <Enemy /> */}
    </div>
  );
}

export default World;
