"use client";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import axios from "axios";
import Link from "next/link";

interface Recipe {
  name: string;
  ingredients: string;
  directions: string;
}

export default function Home() {
  const [recipe, setRecipe] = useState([]);
  useEffect(()=>{
    const fetchRecipes = async() =>{
      const resp = await axios.get("http://localhost:8080/api/recipes")
      setRecipe(resp.data);
    }
    fetchRecipes()
  },[])
  return (
    <div>
      <Navbar />
      <form className="flex items-center justify-center">
      </form>
      {recipe.map((rec: Recipe, index: number) => (
        <div key={index} className="p-4 border-b border-gray-300">
          <h2 className="text-xl font-bold text-[#005299]">
            <Link href={"/Put/?r="+rec.name}>{rec.name}</Link></h2>
          <p className="mt-2">
            <strong>Directions:</strong> {rec.directions}
          </p>
          <p className="mt-2">
            <strong>Ingredients:</strong> {rec.ingredients}
          </p>
         
        </div>
      ))}
    </div>
  );
}
