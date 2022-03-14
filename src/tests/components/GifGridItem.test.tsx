import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import { Gif } from '../../interfaces';

describe('Testing GifGridItem component', () => {
  const gif: Gif = {
    id: '1',
    title: 'A title',
    url: 'https://localhost:3000/image.png'
  };
  const wrapper = shallow(<GifGridItem gif={gif} />);


  test('Should to show the component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should to have a h5 as title', () => {
    const h5 = wrapper.find('h5');
    expect(h5.text().trim()).toBe(gif.title);
  });

  test('Image should have the props equals as url and alt', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(gif.url);
    expect(img.prop('alt')).toBe(gif.title);
  });

  test('Should includes animate__fadeIn class', () => {
    const div = wrapper.find('div.card');
    const className = div.prop('className')
    expect(className?.includes('animate__fadeIn')).toBeTruthy();
  })
})