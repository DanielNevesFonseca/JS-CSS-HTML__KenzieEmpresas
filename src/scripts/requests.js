import { colorError, toast } from "./toast.js";

const baseUrl = "http://localhost:3333";

export async function readAllCategories(){
  const categoriesListRequest = await fetch(`${baseUrl}/categories/readAll`, {
    method: 'GET'
  })
  .then(async (res) => {
    const resJson = await res.json();

    if(res.ok){
      return resJson;      
    } else {
      throw new Error(resJson.message);
    }
  })
  .catch(err => toast(err.message, colorError))

  return categoriesListRequest;
}

export async function readCompaniesByCategory(category){
  const companiesListRequest = await fetch(`${baseUrl}/companies/readByCategory/${category}`, {
    method: "GET",
  })
  .then(async (res) => {
    const resJson = await res.json();

    if(res.ok){
      return resJson;
    } else {
      throw new Error(resJson.message);
    }
  })
  .catch(err => toast(err.message, colorError));
  return companiesListRequest;
}