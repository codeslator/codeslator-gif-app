import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import useGif from '../../hooks/useGif';
import { Gif } from '../../interfaces';
jest.mock('../../hooks/useGif');

describe('GifGrid Component', () => {
  
  test('Should to show the component correctly', () => {
    useGif.mockReturnValue({
      gifs: [],
      isLoading: true,
      fetchGifs: jest.fn()
    })
    const category = 'Hello World';
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Should to show items when images are loaded', () => {
    const gifs: Gif[] = [
      {
        id: '1',
        title: 'Hello World',
        url: 'http://localhost:3000/image.png'
      },
      {
        id: '2',
        title: 'Hello World 1',
        url: 'http://localhost:3000/image1.png'
      },
    ]
    useGif.mockReturnValue({
      gifs,
      isLoading: false,
      fetchGifs: jest.fn()
    })
    const category = 'Hello World';
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h4').exists()).toBeFalsy();
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
  })
})