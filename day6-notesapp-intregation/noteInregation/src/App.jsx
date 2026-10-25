import React, { useState,useEffect } from "react";
import axios from "axios";
const App = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

const [allNotes,setAllNotes] = useState([])


  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    //api call
    let res = await axios.post(
      "http://localhost:3000/notes/create",
      formValues,
    );
    console.log(res);

    setFormValues({
      title: "",
      description: "",
    });
  };

  let getAllNotes = async()=>{
    try{
  
      let res = await  axios.get("http://localhost:3000/notes/allNotes",formValues)
      // console.log(res)
      setAllNotes(res.data.data)
    }
    catch(error){
      console.log("error in get all notes api ",error)
    }
  }



useEffect(()=>{
  getAllNotes()
},[])

  return (
    <div className="h-screen p-5 flex flex-col gap-5">
      <h1 className="text-2xl font-semibold ">Notes App</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border w-70 p-3 rounded gap-4"
      >
        <input
          onChange={handleChange}
          name="title"
          value={formValues.title}
          className="outline-none rounded-xl border border-white p-2"
          type="text"
          placeholder="Title"
        />
        <input
        minLength={20}
        required
          onChange={handleChange}
          name="description"
          value={formValues.description}
          className=" outline-none rounded-xl border border-white p-2"
          type="text"
          placeholder="Description"
        />
        <button className="bg-blue-500 p-2 text-white rounded-xl overflow-hidden ">
          Add Note
        </button>
      </form>

<div>
  {
    
  }
</div>

    </div>
  );
};

export default App;
