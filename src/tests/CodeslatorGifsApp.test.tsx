import { shallow } from 'enzyme';
import { CodeslatorGifApp } from '../CodeslatorGifsApp';

describe('CodesGifApp Component', () => {


  test('Should to show the compoenent correctly', () => {
    const wrapper = shallow(<CodeslatorGifApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should to show a list of categories', () => {
    const categories = ['Pokemon', 'Naruto'];
    const wrapper = shallow(<CodeslatorGifApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);
  });
})