import React, { useContext, useEffect, useState } from "react";

// Components
import { Header } from "../../components/shared/Header";
import { Footer } from "../../components/shared/Footer";
import { PosterElement } from "@/components/shared/PosterElement/PosterElement";
import { AppContext } from "@/context/Context";
import { SearchPage } from "@/components/custom/SearchPage";
import { useParams } from "react-router-dom";

// Api
import api from "../../data/index";
import { Link } from "react-router-dom";

export const ActorPage = () => {
  const { state, dispatch } = useContext(AppContext);
  const { actorId } = useParams();
  const [actorInfo, setActorInfo] = useState(null);

  useEffect(() => {
    api
      .getActorInfo(Number(actorId))
      .then((data) => {
        setActorInfo(data?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [actorId]);

  const indexOfDot = actorInfo?.biography.indexOf(".");
  const ActorBiography = actorInfo?.biography.slice(0, indexOfDot);
  console.log(actorInfo);

  return (
    <div>
      {state?.modal ? <SearchPage /> : null}
      <Header />

      <div className="flex p-6 mt-8">
        <div className="grid grid-cols-6 gap-8">
          <div className="overflow-hidden rounded-full flex items-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${actorInfo?.profile_path}`}
              alt="actorPhoto"
              className="w-[160px] h-[160px] rounded-full  object-cover"
            />
          </div>
          <div className="text-white font-font-rubik-scribble col-span-2 flex flex-col justify-between">
            <p>{actorInfo?.name}</p>
            <p className="font-font-poppins">{ActorBiography}.</p>
            <p className="font-font-poppins text-gray-600  ">
              {actorInfo?.place_of_birth}
            </p>
            <p>{actorInfo?.birthday}</p>
          </div>
        </div>
      </div>
      <div className="p-6 mt-8">
        <h2 className="text-white text-bold text-4xl">
          Filmography ({actorInfo?.movie_credits.cast.length})
        </h2>
        <div className="mt-8 grid grid-cols-5 gap-9">
          {actorInfo?.movie_credits.cast.map((item) => {
            const elementInfoForPoster = {
              title: item.original_title,
              year: item.release_date.split("-")[0],
              rate: item.vote_average.toFixed(2),
              id: item.id,
            };

            return (
              <Link to={`/movies/${item.id}`}>
                <PosterElement
                  elementInfo={elementInfoForPoster}
                  image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  key={item.id}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
