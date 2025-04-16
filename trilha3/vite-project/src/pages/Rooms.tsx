import { Link } from 'react-router-dom';

export function Rooms() {
  const rooms = [
    { id: 1, name: 'Room 1' },
    { id: 2, name: 'Room 2' },
  ];

  return (
    <div>
      <h1>Rooms</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Link to={`/rooms/${room.id}`}>{room.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}