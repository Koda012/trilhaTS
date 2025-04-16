import { useParams } from 'react-router-dom';

export function Animal() {
  const { name } = useParams<{ name: string }>();

  return <h1>Animal: {name}</h1>;
}