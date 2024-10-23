import MealDetal from "@/components/Meals/MealDetal";
import React from "react";

export default function page({ params }) {
  return <MealDetal id={params.id} />;
}
