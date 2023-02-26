import React from "react";
import DishCard from "../../components/DishCard/Dishcard";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";
import "./HomePage.css";

export default function HomePage() {

  const { isLoading, error, data } = useQuery("getRecipes", () => axios.get("/api/spn/random_recipes")
    .then(res => res.data),
    {
      refetchOnWindowFocus: false,
    }
  );

  console.log(data);

  return (
    isLoading ? <Loading /> :
      data.success ?
        <main className="custom--grid">
          {
            data.recipes.map(rec =>
              <DishCard
                key={rec.id}
                data={rec}
              />)
          }
        </main> :
        <Loading />
  )

}