import { colorError, colorSuccess, toast } from "./toast.js";

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

export async function login(loginBody){
  const loginData = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginBody),
  })
  .then(async (res) => {
    const resJson = await res.json();
    if(res.ok){
      toast('Login feito com sucesso! Redirecionando para sua dashboard!', colorSuccess);
      localStorage.setItem('@KenzieEmpresas:infoUser', JSON.stringify(resJson));
      if(resJson.isAdm === true){
        setTimeout(()=> {
          window.location.replace('../pages/dashboard.html');
        }, 1500);
      } else {
        setTimeout(()=> {
          window.location.replace('../pages/userDashboard.html');
        }, 1500);
      }
      return resJson;
    } else {
      throw new Error(resJson.message);
    }
  })
  .catch(err => toast(err.message, colorError));
  return loginData;
}