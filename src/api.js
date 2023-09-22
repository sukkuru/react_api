import axios from "axios";


const searchImage=async(trem)=>{
    const response=await axios.get('https://api.unsplash.com/search/photo',{
        headers:{
         Authorization: 'Client-ID taushXpq2sIbF31tZYgrblm-WOQ5Hh6ec0YxC_HIGYk'
        },
        params:{
          query:trem,
        }
    })
    console.log("response")

    return response.data.results


}
export default searchImage;