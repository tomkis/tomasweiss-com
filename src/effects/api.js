const buildUrl = url => `${process.env.API_URL}api/v1${url}`;

export const submitHireMeForm = (email, phone, note) => fetch(
  buildUrl('/hire-me'),
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    body: `email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&note=${encodeURIComponent(note)}`
  }
);
