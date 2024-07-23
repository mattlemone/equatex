import axios from 'axios'

const API_URL = 'http://your-api-endpoint.com/calculate'  // Replace with your actual API endpoint

export async function calculatePoints(equation) {
  try {
    const response = await axios.post(API_URL, { equation })
    return response.data
  } catch (error) {
    console.error('Error calculating points:', error)
    throw error
  }
}