import reducer, { toggleChecked } from './todosSlice';

describe('Todos slice of state', () => {
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      {
        text: 'Walk the dog',
        checked: false,
        id: '7f2j48',
      },
      {
        text: 'Wash dishes',
        checked: false,
        id: '482jfs',
      },
      {
        text: 'Call Debra',
        checked: false,
        id: '84jd2n',
      },
    ]);
  });

  test('should handle check toggle', () => {
    expect(reducer(undefined, toggleChecked('482jfs'))).toEqual([
      {
        text: 'Walk the dog',
        checked: false,
        id: '7f2j48',
      },
      {
        text: 'Wash dishes',
        checked: true,
        id: '482jfs',
      },
      {
        text: 'Call Debra',
        checked: false,
        id: '84jd2n',
      },
    ]);
  });
});