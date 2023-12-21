// Import React, useState, and useEffect
import React, { useState, useEffect } from 'react';

// Import Axios for making HTTP requests
import axios from 'axios';

// Create the functional component YourComponent
const YourComponent = () => {
  // State to store the data from the API response
  const [champions, setChampions] = useState([]);

  // State to manage loading state while fetching data
  const [loading, setLoading] = useState(true);

  // State to handle errors during data fetching
  const [error, setError] = useState(null);

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    // Async function to fetch data
    const fetchData = async () => {
      try {
        // Make a GET request to the API endpoint
        const response = await axios.get('https://tft-database-backend.vercel.app/api/select/champions');

        // Log the response for debugging purposes
        console.log(response.data);

        // Set the fetched data in the state
        setChampions(response.data);
      } catch (error) {
        // Handle errors by setting the error state
        setError(error);
      } finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once when the component mounts

  // Conditional rendering based on loading and error states
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Render the champion data
  return (
    <div>
      <h2>Champion List</h2>
      <ul>
        {champions.map((champion, index) => (
          <li key={index}>
            <strong>Name:</strong> {champion.name},{' '}
            <strong>Cost:</strong> {champion.cost},{' '}
            <strong>Origin:</strong> {champion.origin},{' '}
            <strong>Class 1:</strong> {champion.className1},{' '}
            <strong>Class 2:</strong> {champion.className2 || 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export the YourComponent component
export default YourComponent;
