import { useEffect, useState } from 'react';
import { getGifs } from '../components/helpers/getGifs';

const useFetchGrifs = category => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    images,
    isLoading,
  };
};

export default useFetchGrifs;
