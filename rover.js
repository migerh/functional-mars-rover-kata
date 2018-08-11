const R = require('ramda');

const updateState = {
  // movement, could be simplified
  'NF': (state) => ({
    ...state,
    y: state.y - 1
  }),
  'NB': (state) => ({
    ...state,
    y: state.y + 1
  }),
  'SF': (state) => ({
    ...state,
    y: state.y + 1
  }),
  'SB': (state) => ({
    ...state,
    y: state.y - 1
  }),
  'WF': (state) => ({
    ...state,
    x: state.x - 1
  }),
  'WB': (state) => ({
    ...state,
    x: state.x + 1,
  }),
  'EF': (state) => ({
    ...state,
    x: state.x + 1
  }),
  'EB': (state) => ({
    ...state,
    x: state.x - 1
  }),

  //rotation
  'WL': (state) => ({
    ...state,
    facing: 'S'
  }),
  'WR': (state) => ({
    ...state,
    facing: 'N'
  }),
  'NL': (state) => ({
    ...state,
    facing: 'W'
  }),
  'NR': (state) => ({
    ...state,
    facing: 'E'
  }),
  'EL': (state) => ({
    ...state,
    facing: 'N'
  }),
  'ER': (state) => ({
    ...state,
    facing: 'S'
  }),
  'SL': (state) => ({
    ...state,
    facing: 'E'
  }),
  'SR': (state) => ({
    ...state,
    facing: 'W'
  }),
}

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
  const moveFunction = updateState[`${roverState.facing}${command}`];
  return wrap(planet)(moveFunction(roverState));
});

module.exports = R.curry((planet, roverState, commands) => {
  return R.reduce(move(planet), roverState, commands)
});