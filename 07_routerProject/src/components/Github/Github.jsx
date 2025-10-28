import React, { useEffect, useState } from 'react'

function Github() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/Devrajsahani');
        const json = await res.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='bg-gray-400 text-white text-3xl p-7'>
      Github followers: {data.followers}
    </div>
  );
}

export default Github;
