const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://odoscontacts.vercel.sh'
    : 'http://localhost:3000';

export default baseUrl;
