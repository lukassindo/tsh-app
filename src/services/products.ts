import { ProductsPayLoad } from "../models/models";

const getProducts = async (search: string, active: boolean, promo: boolean):Promise<ProductsPayLoad> => {
   
    const url = setUrl(search, active, promo);
    
    const response = await fetch(`https://join-tsh-api-staging.herokuapp.com/products${url}`);
    const data = await response.json();
    if (response.status !== 200) {
        return {results: [], errorMessage: 'Woops! We had problem connecting with API. Try again soon!'}
    } else {
        return {results: data.items, errorMessage: ""};
    }   
}

const setUrl = (search: string, active: boolean, promo: boolean) => {
    let url: string = '';
    let searchPhrase: string = '';
    let activeUrl: string = '';
    let promoUrl: string = '';
  
    if(search) {
        searchPhrase = `?search=${search}`;
    }   
    if(active  && searchPhrase) {
        activeUrl = '&active=true'  
    } else if(active) {
        activeUrl = '?active=true' 
    } 
    if((promo && searchPhrase) || (promo && activeUrl)) {
        promoUrl = '&promo=true'  
    } else if(promo) {
        promoUrl = '?promo=true' 
    } 
    url = searchPhrase + activeUrl + promoUrl;
    return url;
}

export {
    getProducts
}