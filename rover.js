const R = require('ramda');

const normalizeUpdateActionMap = {
  // Movement
  'NF': 'Up',
  'SB': 'Up',
  'NB': 'Down',
  'SF': 'Down',
  'WF': 'Left',
  'EF': 'Right',
  'EB': 'Left',
  'WB': 'Right',

  // Rotation
  'WL': 'FaceSouth',
  'WR': 'FaceNorth',
  'NL': 'FaceWest',
  'NR': 'FaceEast',
  'EL': 'FaceNorth',
  'ER': 'FaceSouth',
  'SL': 'FaceEast',
  'SR': 'FaceWest',
};

const updateState = {
  'Up': (state) => ({
    ...state,
    y: state.y - 1
  }),
  'Down': (state) => ({
    ...state,
    y: state.y + 1
  }),
  'Left': (state) => ({
    ...state,
    x: state.x - 1
  }),
  'Right': (state) => ({
    ...state,
    x: state.x + 1,
  }),

  'FaceNorth': (state) => ({
    ...state,
    facing: 'N'
  }),
  'FaceEast': (state) => ({
    ...state,
    facing: 'E'
  }),
  'FaceSouth': (state) => ({
    ...state,
    facing: 'S'
  }),
  'FaceWest': (state) => ({
    ...state,
    facing: 'W'
  })
};

const wrap = R.curry((planet, roverState) => {
  if (roverState.x < 0) {
    return {
      ...roverState,
      x: planet.width - 1
    }
  } else if (roverState.x > planet.width - 1) {
    return {
      ...roverState,
      x: 0
    }
  } else if (roverState.y < 0) {
    return {
      ...roverState,
      y: planet.height - 1
    }
  } else if (roverState.y > planet.height - 1) {
    return {
      ...roverState,
      y: 0
    }
  }

  return roverState;
});

const move = R.curry((planet, roverState, command) => {
  const normalizedCommand = normalizeUpdateActionMap[`${roverState.facing}${command}`];
  const moveFunction = updateState[normalizedCommand];

  return wrap(planet)(moveFunction(roverState));
});

module.exports = R.curry((planet, roverState, commands) => {
  return R.reduce(move(planet), roverState, commands)
});