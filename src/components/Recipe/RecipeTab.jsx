import React, { useEffect, useState } from "react";
import BackIco from "../../assets/icons/back_white.png";
import { useNavigate } from "react-router-dom";
import HeartIco from "../../assets/icons/heart_white.png";
import HeartFilledIco from "../../assets/icons/heart_filled_small.png";
import TimeIco from "../../assets/icons/time.png";
import SuggestedRecipe from "./SuggestedRecipe";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import VegNonVeg from "../../utils/VegNonVeg";
import DefaultFoodImage from "../../assets/images/default_food.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { toast } from "react-toastify";
import "./RecipeTab.css";

export default function RecipeTab({ data, showLike }) {
    const navigate = useNavigate();
    const [liked, setLiked] = useState(false);

    const suggestedRecipeData = useQuery("getSuggestedRecipes",
        () => axios.get("/api/spn/similar_recipes")
            .then(res => res.data),
        {
            refetchOnWindowFocus: false,
        }
    )

    useEffect(() => {
        axios.get(`/api/spn/recipe_isliked/${data.id}`)
            .then(res => setLiked(res.data.liked))
    }
        , [data.id]);

    async function handelLike() {
        if (!liked) {
            const res = await axios.post(`/api/spn/like_recipe`, {
                recipeId: data.id,
                imageUrl: data.image || undefined,
                title: data.title,
                veg: data.vegetarian,
                time: data.readyInMinutes
            });
            if (res.data.success) {
                setLiked(true)
                toast("Recipe Added to Favorite ❤️")
            }
        } else {
            const res = await axios.post(`/api/spn/dislike_recipe`, {
                recipeId: data.id
            });
            if (res.data.success) {
                setLiked(false);
                toast("Recipe Removed from Favorite 💔")
            }

        }
    }

    return (
        <div className="recipetab">
            <div className="recipetab--innerdiv">
                <div className="recipetab--head">
                    <div className="recipetab--blackcircle">
                        <LazyLoadImage src={BackIco} alt="close icon" onClick={() => navigate(-1)} />
                    </div>
                    <div className="recipetab--von" style={VegNonVeg(data.vegetarian)}></div>
                </div>
                <div className="recipetab--maindiv">
                    <div className="recipetab--recipe">
                        <div className="recipetab--imgbase">
                            <LazyLoadImage
                                src={data.image || DefaultFoodImage}
                                alt="Food Img"
                                className="recipetab--imgbase--img"
                            />
                            {
                                showLike && <div className="recipetab--imgforeground">
                                    <div className="recipetab--blackcircle" onClick={handelLike}>
                                        <LazyLoadImage src={liked ? HeartFilledIco : HeartIco} alt="heart icon" />
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="recipetab--dishtitle">
                            <h2 className="recipetab--title">{data.title}</h2>
                            <LazyLoadImage
                                src={TimeIco}
                                alt="time png"
                                className="recipetab--dishtitle--img"
                            />
                            <h4 className="recipetab--time">{`${data.readyInMinutes} Mins`}</h4>
                        </div>
                        <div className="recipetab--ingredients">
                            <h2>Ingredients :-</h2>
                            <ol>
                                {
                                    data.extendedIngredients.map(
                                        (ingre, id) => <li key={id}>{ingre.original}</li>
                                    )
                                }
                            </ol>
                        </div>
                        <div className="recipetab--actualrecipe">
                            <h2>Instructions :-</h2>
                            <p dangerouslySetInnerHTML={{ __html: data.instructions }}></p>
                        </div>
                        <div className="recipetab--actualrecipe">
                            <h2>Summay :-</h2>
                            <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
                        </div>
                    </div>
                    <div className="recipetab--suggestion">
                        <h3 className="recipetab--alsosee">Also See :-</h3>
                        {suggestedRecipeData.isFetching ? <Loading /> :
                            suggestedRecipeData.data.success ?
                                suggestedRecipeData.data.recipes.map(
                                    recipe => <SuggestedRecipe
                                        key={recipe.id}
                                        data={recipe}
                                    />
                                )
                                :
                                <Loading />
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}