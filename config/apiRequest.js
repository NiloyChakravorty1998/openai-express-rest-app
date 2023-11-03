import axios from "axios";



const request  = (prompt) => {
const apiKey = process.env.API_KEY;
const baseURI =process.env.API_BASE_URL;

//FRAMING URL TO HIT
const endpoint = baseURI+`/completions`;
const inputData = {
  prompt: prompt,
  max_tokens: 50,
};
axios.post(endpoint, inputData, {
  headers: {
    'Authorization': `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  }
})
  .then(response => {
    // Handle the API response
    console.log(response.data.choices[0].text);
  })
  .catch(error => {
    console.error(error);
  });
}
export default request;
