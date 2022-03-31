import axios from "axios";

export function uploadimage(files,setimg,setloading) {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "StorkCloud");
    setloading(true);
    axios
      .post("https://api.cloudinary.com/v1_1/dq1i1g9th/image/upload", formData)
      .then((res) => {
        setimg(res.data.url);
        setloading(false);
        console.log(res.data.url);
      });
  }
