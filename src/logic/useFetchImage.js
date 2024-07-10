import { useQuery } from 'react-query';

const fetchImage = async (imageUrl) => {
    const response = await fetch(`https://api-don-ar.vercel.app${imageUrl}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.blob();
};

const useFetchImage = (imageUrl) => {
    return useQuery(['image', imageUrl], () => fetchImage(imageUrl));
};

export default useFetchImage;
