import Todo from './Todo';
import { shallow } from 'enzyme';

describe('Todo', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Todo />);
  });

  test('renders `Walk the dog`', () => {
    expect(wrapper.find('#todo-text').text()).toBe('Walk the dog');
  });
});
