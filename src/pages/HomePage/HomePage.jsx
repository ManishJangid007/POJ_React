import React, { useEffect, useState } from "react";
import DishCard from "../../components/DishCard/Dishcard";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import "./HomePage.css";

export default function HomePage() {
  const navigate = useNavigate();

  const { isFetching, error, data } = useQuery("getRecipes", () => axios.get("/api/spn/random_recipes")
    .then(res => res.data),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      keepPreviousData: true
    }
  );

  return (
    isFetching ? <Loading /> :
      data.success ?
        <main className="custom--grid">
          {
            data.recipes.map(rec =>
              <DishCard
                key={rec.id}
                data={rec}
                onClick={() => navigate(`/recipe/${rec.id}`)}
              />)
          }
        </main> :
        <NotFound msg="Api Limit Exceeded 😥😭" />
  )

}