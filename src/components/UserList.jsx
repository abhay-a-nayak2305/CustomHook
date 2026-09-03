import React from 'react';
import { useFetch } from './hooks/useFetch.js';
import './UserList.css';

const URL = 'https://jsonplaceholder.typicode.com/users';

export default function UserList() {
  const { data, loading, error } = useFetch(URL);

  if (loading) return <p className="status">Loading users...</p>;
  if (error) return <p className="status error">Failed to load users.</p>;

  return (
    <div className="page">
      <h1>Team Directory</h1>
      <p className="subtitle">A quick look at the people behind the project.</p>
      <div className="grid">
        {data?.map((user) => (
          <article className="card" key={user.id}>
            <div className="avatar">{user.name.charAt(0)}</div>
            <h2>{user.name}</h2>
            <p className="role">{user.company?.name}</p>
            <dl>
              <div>
                <dt>Email</dt>
                <dd>{user.email}</dd>
              </div>
              <div>
                <dt>City</dt>
                <dd>{user.address?.city}</dd>
              </div>
              <div>
                <dt>Website</dt>
                <dd>{user.website}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  );
}
