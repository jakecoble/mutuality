import fetch from 'cross-fetch';

export function create (firstName, lastName, email, password) {
  return fetch('/users/create', {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then(response => response.json());
}

export function login (email, password) {
  return fetch('/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then(response => response.json());
}
