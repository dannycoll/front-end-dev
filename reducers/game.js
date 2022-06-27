import { TileMeta } from '../components/2048Game/Tile';

export const initialState = {
  tiles: {},
  byIds: [],
  hasChanged: false,
  inMotion: false,
};

export const GameReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_TILE':
      return {
        ...state,
        tiles: {
          ...state.tiles,
          [action.tile.id]: action.tile,
        },
        byIds: [...state.byIds, action.tile.id],
        hasChanged: false,
      };
    case 'UPDATE_TILE':
      return {
        ...state,
        tiles: {
          ...state.tiles,
          [action.tile.id]: action.tile,
        },
        hasChanged: true,
      };
    case 'MERGE_TILE':
      const { [action.source.id]: source, [action.destination.id]: destination, ...restTiles } = state.tiles;
      return {
        ...state,
        tiles: {
          ...restTiles,
          [action.destination.id]: {
            id: action.destination.id,
            value: action.source.value + action.destination.value,
            position: action.destination.position,
          },
        },
        byIds: state.byIds.filter(id => id !== action.source.id),
        hasChanged: true,
      };
    case 'START_MOVE':
      return {
        ...state,
        inMotion: true,
      };
    case 'END_MOVE':
      return {
        ...state,
        inMotion: false,
      };
    default:
      return state;
  }
};
