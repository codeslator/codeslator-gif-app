import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';

describe('AddCategory Component', () => {
  const setCategories = jest.fn(); // Mocking the function
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })
  
  test('Should to show the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should to change value in the input', () => {
    const input = wrapper.find('input');
    const value = 'Hello world';
    input.simulate('change', { currentTarget: { value } }); // Simulate an event
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(value)
  });

  test('Don\'t should submit the data', () => {
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('Should submit data, call setCategories and clear the input', () => {
    const value = 'Hello world';
    wrapper.find('input').simulate('change', { currentTarget: { value } }); // Simulate an event
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(wrapper.find('input').prop('value')).toBe('')
  });
})