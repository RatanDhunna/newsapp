import { create } from "apisauce";


const api = create({
    baseURL: 'https://newsapi.org/v2',
  })
  const apiKey='?country=us&apiKey=a230ce6b70cd4f8c90285eeb5335bde3';

  const topHeadlines=api.get('/top-headlines' + apiKey);
  const getByCategory=(category)=>api.get('/everything?q='+category+'&apiKey=a230ce6b70cd4f8c90285eeb5335bde3');

  export default {
 topHeadlines,
 getByCategory
  }


    