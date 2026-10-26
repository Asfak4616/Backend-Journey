import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteCard from "./components/NoteCard";

const App = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
  });

  const [updateNoteId,setUpdateNoteId] =useState(null)

  const [allNotes, setAllNotes] = useState([]);

  // getAllNotes আগে define করা হয়েছে, তাহলে handleSubmit এ call করা যাবে
  const getAllNotes = async () => {
    try {
      let res = await axios.get("http://localhost:3000/notes/allNotes");
      console.log("API response:", res.data); // debug
      setAllNotes(res.data.data);
    } catch (error) {
      console.log("error in get all notes api ", error);
    }
  };

  const handleChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };



  useEffect(() => {
    getAllNotes();
  }, []);




    const handleSubmit = async (e) => {
    e.preventDefault();
    if(updateNoteId){
      // update api call
      let res = await axios.put(
        `http://localhost:3000/notes/${updateNoteId}`,
        formValues
      );
      console.log(res)
      setUpdateNoteId(null)
    }
    else{
      // api call for create note

    }
    try {
      let res = await axios.post(
        "http://localhost:3000/notes/create",
        formValues
      );
      console.log("Note created:", res.data);
      setFormValues({ title: "", description: "" });
      getAllNotes(); // নতুন note add হলে list refresh
    } catch (error) {
      console.log("Error creating note:", error);
    }
  };

  let deleteNote =async (id)=>{
    try{
      let res = await axios.delete(`http://localhost:3000/notes/${id}`)
      console.log(res)

    }
    catch(error){
      console.log("error is delete note",error)
    }
  }
  
  let noteForUpdate = (notes)=>{
  console.log(notes)
setUpdateNoteId(notes._id)
  setFormValues({
    title:notes.title,
    description:notes.description
  })
  }


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

<div className="flex gap-4 ">
  {
    allNotes.map((val)=>(
      <NoteCard key={val._id} noteForUpdate={noteForUpdate} notes={val} deleteNote={deleteNote}/>
    ))
  }
</div>

    </div>
  );
};

export default App;
