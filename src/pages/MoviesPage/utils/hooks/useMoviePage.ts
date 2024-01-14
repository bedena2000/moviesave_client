import { useMovieList } from "@/hooks/useMovieList";

export const useMoviePage = (title: string) => {

 


  const { list, error, isLoading } = useMovieList(title);

  return {
    list,
    error,
    isLoading,
  };
};
