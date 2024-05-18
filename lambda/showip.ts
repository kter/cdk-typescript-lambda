import axios from 'axios';

export const handler = async (event: any, context: any) => {
  const response = await axios.get('https://api.ipify.org/?format=json');
  console.log(response.data);
  return response.data;
};
