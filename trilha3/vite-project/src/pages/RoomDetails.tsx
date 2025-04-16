import { useParams, useNavigate } from 'react-router-dom';

export function RoomDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Room Details: {id}</h1>
      <button onClick={() => navigate('/booking-success')}>Reserve</button>
    </div>
  );
}