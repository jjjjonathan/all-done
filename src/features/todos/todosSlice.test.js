import reducer, { toggleChecked, editText, add } from './todosSlice';

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

  test('should handle text edit', () => {
    expect(
      reducer(
        undefined,
        editText({
          text: 'Call Deborah',
          id: '84jd2n',
        }),
      ),
    ).toEqual([
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
        text: 'Call Deborah',
        checked: false,
        id: '84jd2n',
      },
    ]);
  });

  test('should handle adding new todo', () => {
    expect(reducer([], add('Go to the gym'))).toMatchObject([
      {
        text: 'Go to the gym',
        checked: false,
      },
    ]);
  });
});
