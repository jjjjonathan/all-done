import Todo from './Todo';
import { shallow } from 'enzyme';

describe('Todo', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Todo />);
  });

  test('becomes checked when clicked', () => {
    expect(
      wrapper.find('#todo-checkbox').hasClass('bi-check-square-fill'),
    ).toBe(false);
    wrapper.find('#todo-checkbox').simulate('click');
    expect(
      wrapper.find('#todo-checkbox').hasClass('bi-check-square-fill'),
    ).toBe(true);
  });

  test('text becomes editable when clicked', () => {
    wrapper.find('#todo-text').simulate('click');
    expect(wrapper.find('#todo-text').is('input')).toBe(true);
  });
});
