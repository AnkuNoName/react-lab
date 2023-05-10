import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VariableSizeList } from 'react-window';

const Thumbnail = ({ url, onClick }) => {
  return <a href={url} target="_blank" rel="noopener noreferrer">Thumbnail</a>;
};

const Image = ({ url }) => {
  return <img src={url} alt="Main Image" />;
};

const DataTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredData = data.filter(item => {
    const titleWords = item.title.split(' ');
    return titleWords.length <= 30;
  });

  const Row = ({ index, style }) => {
    const item = filteredData[index];
    return (
      <div style={style}>
        <div>{item.id}</div>
        <div>{item.title}</div>
        <div>
          <Thumbnail url={item.thumbnailUrl} onClick={() => openImage(item.url)} />
        </div>
      </div>
    );
  };

  const openImage = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <VariableSizeList
        height={1000}
        itemCount={filteredData.length}
        itemSize={() => 50}
      >
        {Row}
      </VariableSizeList>
    </div>
  );
};

export default DataTable;