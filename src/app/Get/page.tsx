"use client";
import { useState } from "react";
import { Navbar } from "../Navbar";

interface Recipe {
  name: string;
  ingredients: string;
  directions: string;
}

export default function Get() {
  const [recipe, setRecipe] = useState([]);
  async function getRecipe() {
    const res = await fetch("http://localhost:8080/api/recipes");
    const finalRes = await res.json();
    setRecipe(finalRes);
    console.log(finalRes);
  }

  return (
    <div>
      <Navbar />
      <form className="flex items-center justify-center mt-16">

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-gray-500"
          onClick={getRecipe}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </form>
      {recipe.map((rec: Recipe, index: number) => (
        <div key={index} className="p-4 border-b border-gray-300">
          <h2 className="text-xl font-bold">{rec.name}</h2>
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
