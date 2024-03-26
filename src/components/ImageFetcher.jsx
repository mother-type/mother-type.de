import React, { useState, useEffect } from 'react';

function ImageFetcher({ repoName }) {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/mother-type/${repoName}/contents/documentation/images`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }

        const data = await response.json();
        const imageUrls = data
          .filter((item) => item.type === 'file' && item.name.endsWith('.webp'))
          .map((item) => item.download_url);

        setImageUrls(imageUrls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [repoName]);

  return (
    <div className='flex grid-layout'>
      {imageUrls.map((url) => (
        <div className='grid-item span-2' key={url}>
          <img src={url} alt="" />
        </div>
      ))}
    </div>
  );
}

export default ImageFetcher;
