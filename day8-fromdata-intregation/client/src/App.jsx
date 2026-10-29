import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const App = () => {
  const { register, handleSubmit } = useForm();

  const formData = new FormData();
  const submitHandler = async (data) => {
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("profile_pic", data.profile_pic[0]);

    await axios.post("http://localhost:3000/user/create", formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input
          {...register("name")}
          className="border border-white-2 p-2 rounded"
          type="text"
          placeholder="Enter Your name:"
        />
        <br />
        <input
          {...register("email")}
          className="border border-white-2 p-2 rounded mt-2"
          type="email"
          placeholder="Enter Your Email"
        />
        <br />
        <input
          {...register("profile_pic")}
          className="border border-white-2 p-2 rounded mt-2"
          type="file"
          placeholder="upload Your profile pic"
        />
        <br />
        <input
          className="border border-white-2 p-2 rounded mt-2"
          type="submit"
        />
      </form>
    </div>
  );
};
export default App;
