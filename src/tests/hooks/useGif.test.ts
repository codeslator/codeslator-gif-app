import useGif from '../../hooks/useGif';
import { renderHook, act } from '@testing-library/react-hooks'

describe('Testing: useGif custom Hook', () => {
  test('Should return the initial state',  () => {
    const { result } = renderHook(() => useGif());
    const { gifs, isLoading } = result.current;
    // await waitForNextUpdate();
    expect(gifs).toEqual([]);
    expect(isLoading).toBe(true);
  });

  test('Should return a image array and loading state in false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useGif());
    act(() => {
      result.current.fetchGifs('Pokemon');
    })
    await waitForNextUpdate();
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(12);
    expect(isLoading).toBe(false);
  });
});