import axios from 'axios'

export const getPanier =async()=>{
    const config = {
        headers: {
          authorization:"Bearer " +localStorage.getItem("token"),
        },
      };
    try {
        let panier= await axios.get("/panier/getpanier/")
        return(panier)
    } catch (error) {
    }
}