const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://odos-contacts.vercel.app'
    : 'http://localhost:3000';

export default baseUrl;
