"use client";
import { FormEvent, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Recipe {
  name: string;
  ingredients: string;
  directions: string;
}

export default function Home() {
  const [recipe, setRecipe] = useState([]);
const router = useRouter();
const fetchRecipes = async() =>{
  const resp = await axios.get("http://localhost:8080/api/recipes")
  setRecipe(resp.data);
}
  useEffect(()=>{
    fetchRecipes()
  },[])
  async function handleDelete(name:string){
    const resp = await axios.delete("http://localhost:8080/api/recipes/" + name)
    if (resp.status == 200) {
      alert("Recipe Deleted Successfully!")
      fetchRecipes()
    }
    else {
      alert("Deletion not successful!")
    }

  }
  return (
    <div>
      <Navbar />
      <form className="flex items-center justify-center"></form>
      {recipe.map((rec: Recipe, index: number) => (
        <div key={index} className="p-4 border-b border-gray-300 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold text-[#005299]">
              <Link href={`/Put/?r=${encodeURIComponent(rec.name)}`}>{rec.name}</Link>
            </h2>
            <p className="mt-2">
              <strong>Directions:</strong> {rec.directions}
            </p>
            <p className="mt-2">
              <strong>Ingredients:</strong> {rec.ingredients}
            </p>
          </div>
          <button
            onClick={() => handleDelete(rec.name)}
            className="text-red-500 hover:bg-red-100 border border-red-500 rounded px-4 py-2 transition-colors duration-300"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
