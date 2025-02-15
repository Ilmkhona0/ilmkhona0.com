<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface DataItem {
  _id: string;
  title: string;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    axios.get<DataItem[]>('http://localhost:8000/api/items')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {data.map(item => (
        <div key={item._id}>{item.title}</div>
      ))}
    </div>
  );
};

=======
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface DataItem {
  _id: string;
  title: string;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    axios.get<DataItem[]>('http://localhost:8000/api/items')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {data.map(item => (
        <div key={item._id}>{item.title}</div>
      ))}
    </div>
  );
};

>>>>>>> b3504840a1af7dd805aa9d8c1cb0e402646f4e47
export default Dashboard;