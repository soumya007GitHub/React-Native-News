import axios from 'axios';

const Api = async () => {
  try {
    const response = await axios.get('https://newsdata.io/api/1/latest?apikey=pub_6c8c87f305d846d6803c5199a5008fb4&q=india');
    const result = response.data;
    return result;
  } catch (err) {
    console.error(err);
    return null;
  } finally {
    console.log('done');
  }
};

export default Api;
