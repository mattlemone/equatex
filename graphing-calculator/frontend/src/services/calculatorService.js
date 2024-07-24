import axios from 'axios';

const CORS_PROXY = 'https://thingproxy.freeboard.io/fetch/';
const WOLFRAM_API_URL = 'http://api.wolframalpha.com/v2/query';
const APP_ID = 'UK9EPW-HV82KJPR4E';  // Replace with your Wolfram Alpha AppID

export async function calculatePoints(equation) {
  try {
    const response = await axios.get(`${CORS_PROXY}${WOLFRAM_API_URL}`, {
      params: {
        input: `plot ${equation} from -10 to 10`,
        output: 'json',
        appid: APP_ID
      }
    });

    // Log the entire response to debug the structure
    console.log('API Response:', response.data);

    // Parse the response to extract the points
    const pods = response.data.queryresult.pods;
    console.log('Pods:', pods);

    const plotPod = pods.find(pod => pod.id === 'Plot');
    if (!plotPod) {
      throw new Error('No plot data found');
    }

    const pointsString = plotPod.subpods[0].plaintext;
    return parsePointsString(pointsString);
  } catch (error) {
    console.error('Error calculating points:', error);
    throw error;
  }
}


function parsePointsString(pointsString) {
  // This is a very basic parser and might need to be adjusted based on the actual response format
  const pointPairs = pointsString.split(',');
  return pointPairs.map(pair => {
    const [x, y] = pair.trim().split(' ').map(Number);
    return { x, y };
  });
}
