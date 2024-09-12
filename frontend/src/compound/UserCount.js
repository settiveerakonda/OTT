import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserCount = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get('http://localhost:4000/usercount');
        setUserCount(response.data.count);
      } catch (error) {
        console.error('Error fetching user count:', error);
      }
    };

    fetchUserCount();
  }, []);

  return <span>{userCount}</span>;
};

export default UserCount;
