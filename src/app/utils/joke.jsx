import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function JokePage() {
  const router = useRouter();
  const { id } = router.query;
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    if (id) {
      // Supongamos que tienes una forma de recuperar un chiste por su ID
      fetch(`/api/jokes/${id}`)
        .then((response) => response.json())
        .then((data) => setJoke(data.joke))
        .catch((error) => console.error('Error fetching joke:', error));
    }
  }, [id]);

  if (!joke) return <div>Loading...</div>;

  return (
    <div>
      <h1>Joke</h1>
      <p>{joke}</p>
    </div>
  );
}