import App from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('renders the title of the app', () => {
    expect(wrapper.find('#app-title').text()).toBe('All Done');
  });
});
