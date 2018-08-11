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
  const planet = {width: 5, height: 5};
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

test('it wraps', () => {
  const planet = {width: 5, height: 5};
  const roverState = {x: 3, y: 3, facing: 'N'};

  const state = rover(planet, roverState, 'FFFFF'.split(''));
  expect(state.y).toBe(3);
});