import * as types from '../constants/actionTypes';

export const playerEnterActionCreator = (player) => ({
  type: types.PLAYER_ENTER,
  payload: player,
});
