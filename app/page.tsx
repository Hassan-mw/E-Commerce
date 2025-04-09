// pages/index.tsx
import { GetServerSideProps } from 'next';

// Simulating fetching data from the server
async function fetchBikes() {
  return [
    { id: 1, name: 'Mountain Bike', description: 'Perfect for rugged trails.' },
    { id: 2, name: 'Road Bike', description: 'Great for city roads.' },
    { id: 3, name: 'Hybrid Bike', description: 'Ideal for both trails and roads.' },
  ];
}

export default function Home({ bikes }: { bikes: any[] }) {
  return (
    <div>
      <h1>Bike Listings</h1>
      <ul>
        {bikes.map((bike) => (
          <li key={bike.id}>
            <h2>{bike.name}</h2>
            <p>{bike.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Server-Side Rendering (SSR): Data is fetched on every page request
export const getServerSideProps: GetServerSideProps = async () => {
  const bikes = await fetchBikes();
  return {
    props: { bikes },
  };
};
