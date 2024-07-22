import { useQuery } from 'react-query';

const fetchImage = async (imageUrl) => {
    if (!imageUrl) {
      throw new Error('Image URL is not provided');
    }
    const response = await fetch(`https://api-don-ar.vercel.app${imageUrl}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  };
  
  const useFetchImage = (imageUrl) => {
    return useQuery(
      ['image', imageUrl],
      () => fetchImage(imageUrl),
      {
        enabled: !!imageUrl,
        onError: (error) => {
          console.error('Error fetching image:', error);
        }
      }
    );
  };
  

export default useFetchImage;
