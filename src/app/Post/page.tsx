'use client'
import { FormEvent } from "react";
import { Navbar } from "../Navbar";
import axios from "axios";

export default function Put() {
  async function onSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault()
    console.log(event.currentTarget.value)
    const formData = new FormData(event.currentTarget)
  }
  return (
    <div>
      <Navbar />
      <form className="flex flex-col items-center mt-16" onSubmit={onSubmit}>
      <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          className="px-4 py-2 text-lg border border-gray-300 rounded mr-2"
        /><br/>
          <textarea
          name="name"
          placeholder="Ingredients" rows="5" cols="35"
          className="px-4 py-2 text-lg border border-gray-300 rounded mr-2"
        /><br/>
          <textarea
          name="name"
          placeholder="Directions" rows="15" cols="35"
          className="px-4 py-2 text-lg border border-gray-300 rounded mr-2"
        /><br/>
        <button className="bg-[#ffbd88] text-white w-32 h-12 rounded-lg">Add</button>
      </form>
    </div>
  );
}
