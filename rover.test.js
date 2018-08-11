const rover = require('./rover');

test('facing north, F decreases y by one', () => {
  const planet = {width: 5, height: 5};
  const roverState = {x: 3, y: 3, facing: 'N'};

  const state = rover(planet, roverState, ['F']);
  expect(state.y).toBe(2);
});

test('facing north, FF decreases y by two', () => {
  const planet = {width: 5, height: 5};
  const roverState = {x: 3, y: 3, facing: 'N'};

  const state = rover(planet, roverState, ['F', 'F']);
  expect(state.y).toBe(1);
});

test('facing north, B increases y by one', () => {
  const planet = {width: 5, height: 5};
  const roverState = {x: 3, y: 3, facing: 'N'};

  const state = rover(planet, roverState, ['B']);
  expect(state.y).toBe(4);
});

test('facing south, F increases y by one', () => {
  const planet = {width: 5, height: 5};
  const roverState = {x: 3, y: 3, facing: 'S'};

  const state = rover(planet, roverState, ['F']);
  expect(state.y).toBe(4);
});

test('facing south, B decreases y by one', () => {
  const planet = {width: 5, height: 5};
  const roverState = {x: 3, y: 3, facing: 'S'};

  const state = rover(planet, roverState, ['B']);
  expect(state.y).toBe(2);
});

test('facing north, BB increases y by two', () => {
  const planet = {width: 6, height: 6};
  const roverState = {x: 3, y: 3, facing: 'N'};

  const state = rover(planet, roverState, ['B', 'B']);
  expect(state.y).toBe(5);
});

test('facing west, F decreases x by one', () => {
  const planet = {width: 5, height: 5};
  const roverState = {x: 3, y: 3, facing: 'W'};

  const state = rover(planet, roverState, ['F']);
  expect(state.x).toBe(2);
});

test('facing west, B increases x by one', () => {
  const planet = {width: 5, height: 5};
  const roverState = {x: 3, y: 3, facing: 'W'};

  const state = rover(planet, roverState, ['B']);
  expect(state.x).toBe(4);
});

test('facing east, F increases x by one', () => {
  const planet = {width: 5, height: 5};
  const roverState = {x: 3, y: 3, facing: 'E'};

  const state = rover(planet, roverState, ['F']);
  expect(state.x).toBe(4);
});

test('facing east, B decreases x by one', () => {
  const planet = {width: 5, height: 5};
  const roverState = {x: 3, y: 3, facing: 'E'};

  const state = rover(planet, roverState, ['B']);
  expect(state.x).toBe(2);
});

test('facing east, R makes the rover face south', () => {
  const planet = {width: 5, height: 5};
  const roverState = {x: 3, y: 3, facing: 'E'};

  const state = rover(planet, roverState, ['R']);
  expect(state.facing).toBe('S');
});

test('facing east, L makes the rover face north', () => {
  const planet = {width: 5, height: 5};
  const roverState = {x: 3, y: 3, facing: 'E'};

  const state = rover(planet, roverState, ['L']);
  expect(state.facing).toBe('N');
});

test('complex example', () => {
  const planet = {width: 5, height: 5};
  const roverState = {x: 3, y: 3, facing: 'N'};

  const state = rover(planet, roverState, 'FLFLFLF'.split(''));
  expect(state.x).toBe(3);
  expect(state.y).toBe(3);
  expect(state.facing).toBe('E');
});

test('it wraps to the north', () => {
  const planet = {width: 5, height: 5};
  const initialRoverState = {x: 3, y: 3, facing: 'N'};
  const curiosity = rover(planet, initialRoverState);

  const state = curiosity('FFFFF'.split(''));
  expect(state.y).toBe(3);
});

test('it wraps to the south', () => {
  const planet = {width: 5, height: 5};
  const initialRoverState = {x: 3, y: 3, facing: 'N'};
  const curiosity = rover(planet, initialRoverState);

  const state = curiosity('BBBBB'.split(''));
  expect(state.y).toBe(3);
});

test('it wraps to the west', () => {
  const planet = {width: 5, height: 5};
  const initialRoverState = {x: 3, y: 3, facing: 'W'};
  const curiosity = rover(planet, initialRoverState);

  const state = curiosity('FFFFF'.split(''));
  expect(state.x).toBe(3);
});

test('it wraps to the east', () => {
  const planet = {width: 5, height: 5};
  const initialRoverState = {x: 3, y: 3, facing: 'E'};
  const curiosity = rover(planet, initialRoverState);

  const state = curiosity('FFFFF'.split(''));
  expect(state.x).toBe(3);
});