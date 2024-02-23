import axios from "axios"
// 재생성 방지
export async function fetchCountries() {
  // 비동기 동작
  try{
  const response = await axios.get('https://naras-api.vercel.app/all');

  return response.data;
  } catch(error){
    return [];
  }
}

export async function fetchSearchResults(q) {

  try{
  const response = await axios.get(`https://naras-api.vercel.app/search?q=${q}`);

  return response.data;
  } catch(error){
    return [];
  }
}

export async function fetchCountry(code){
  try{
   const responce = await axios.get(`https://naras-api.vercel.app/code/${code}`);
   
   return responce.data;
  } catch(error){
    return null;
  }
}