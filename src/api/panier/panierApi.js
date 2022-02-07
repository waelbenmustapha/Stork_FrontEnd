import axios from 'axios'

export const getPanier =async()=>{
    const config = {
        headers: {
          authorization:"Bearer " +localStorage.getItem("jwt"),
        },
      };
      let userId=JSON.parse(localStorage.getItem("user")).id 
      console.log("user.id",userId)
    try {
        let panierT= await axios.get(`/panier/getpanier/${userId}`,config)
        console.log("panierT",panierT.data)
        return(panierT.data)
        
    } catch (error) {
      console.log("error",error)
    }
}