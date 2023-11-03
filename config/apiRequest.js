import axios from 'axios'

const request = async (prompt) => {

  const apiKey = process.env.API_KEY;
  const endpoint = `${process.env.API_BASE_URL}/completions`;
  const inputData = {
    model: 'text-davinci-003',
    prompt: prompt,
    temperature: 0,
    max_tokens: 4000,
  };

  try {
    const response = await axios.post(endpoint, inputData, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error(error);
  }
};

export default request;
