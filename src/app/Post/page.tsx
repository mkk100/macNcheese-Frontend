"use client";
import { FormEvent, useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import axios from "axios";
import { useRouter } from 'next/navigation';

export default function Put() {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [redirect, setRedirect] = useState(false)
  const router = useRouter();

  useEffect(()=>{
    if (redirect){
      router.push('/')
    }
  },[redirect])
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const recipeData = {
      name: name,
      ingredients: ingredients,
      directions: directions,
    };
    console.log(recipeData);
    await axios
      .post("http://localhost:8080/api/recipes", {
        headers: { "Content-Type": "application/json" },
        data: recipeData,
      })
      .then((res) => {
        setRedirect(true);
        alert("Recipe Added Successfully!")
      });
  }

  return (
    <div>
      <Navbar />
      <form className="flex flex-col items-center mt-16" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Recipe Name"
          className="px-4 py-2 text-lg border border-gray-300 rounded mr-2"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <textarea
          name="name"
          placeholder="Ingredients"
          rows="5"
          cols="35"
          className="px-4 py-2 text-lg border border-gray-300 rounded mr-2"
          onChange={(e) => setIngredients(e.target.value)}
        />
        <br />
        <textarea
          name="name"
          placeholder="Directions"
          rows="15"
          cols="35"
          className="px-4 py-2 text-lg border border-gray-300 rounded mr-2"
          onChange={(e) => setDirections(e.target.value)}
        />
        <br />
        <button className="bg-[#ffbd88] text-white w-32 h-12 rounded-lg">
          Add
        </button>
      </form>
    </div>
  );
}
