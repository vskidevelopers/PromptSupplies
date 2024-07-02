/* eslint-disable no-unused-vars */
import {
  File,
  RefreshCcwDot,
  MoreHorizontal,
  PlusCircle,
  Trash2,
  Pencil,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { useMovieFunctions } from "@/utils/firebase";
import AddMovieForm from "./AddMovieForm";

function AllMovies() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [topPickMovies, setTopPicksMovies] = useState([]);
  const [moviesOfTheWeek, setMoviesOfTheWeek] = useState([]);

  const { getAllMoviesByCategory } = useMovieFunctions();

  const categories = ["vista-top-picks", "top-movies-of-the-week"];
  const fetchAllMoviesInStore = async () => {
    setLoading(true);
    try {
      const topPicks = await getAllMoviesByCategory(categories[0]);
      const topMovies = await getAllMoviesByCategory(categories[1]);

      const fetchAllMoviesResponse = [...topPicks.data, ...topMovies.data];
      console.log("fetch_all_movies_response >> ", fetchAllMoviesResponse);
      setMovies(fetchAllMoviesResponse?.data);
      setTopPicksMovies(topPicks);
      setMoviesOfTheWeek(topMovies);
      setLoading(false);
    } catch (error) {
      console.error("error_response_fetching_all_movies >> ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("fetching_all_movies_in_store_initialized ... ");
    fetchAllMoviesInStore();
  }, []);

  // Pagination states and constants
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const itemsPerPage = 10;
  const lastCount = itemOffset + itemsPerPage;

  // Update currentItems and pageCount when movies or itemOffset changes
  useEffect(() => {
    try {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading movies from ${itemOffset} to ${endOffset}`);
      setCurrentItems(movies?.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(movies?.length / itemsPerPage));
    } catch (error) {
      console.log("An error occurred while paginating movies:", error);
    }
  }, [itemOffset, itemsPerPage, movies]);

  const renderAllMovies = () => {
    if (loading) {
      return (
        <TableRow>
          <TableCell colSpan={8} className="text-center">
            Fetching movies?. Please wait...
          </TableCell>
        </TableRow>
      );
    } else if (!movies || movies?.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={8} className="text-center">
            No movies available
          </TableCell>
        </TableRow>
      );
    } else {
      return movies?.map((movie, index) => (
        <TableRow key={index}>
          {/* # */}
          <TableCell>{index + 1}</TableCell>

          {/* Poster Image */}
          <TableCell className="hidden sm:table-cell">
            <img
              alt="Movie poster"
              className="aspect-square rounded-md object-cover"
              height="64"
              src={movie.poster || "/placeholder.svg"}
              width="64"
            />
          </TableCell>

          {/* Name */}
          <TableCell className="font-medium">{movie.name}</TableCell>

          {/* Rating */}
          <TableCell>{movie.rating}</TableCell>

          {/* Description */}
          <TableCell>{truncate(movie.description, 100)}</TableCell>

          {/* Release Date */}
          <TableCell className="hidden md:table-cell">
            {movie.releaseDate}
          </TableCell>

          {/* Type */}
          <TableCell className="hidden md:table-cell">{movie.type}</TableCell>

          {/* Trailer Link */}
          <TableCell>{movie?.trailer}</TableCell>
        </TableRow>
      ));
    }
  };
  const renderTopPicksMovies = () => {
    if (loading) {
      return (
        <TableRow>
          <TableCell colSpan={8} className="text-center">
            Fetching movies?. Please wait...
          </TableCell>
        </TableRow>
      );
    } else if (!movies || movies?.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={8} className="text-center">
            No movies available
          </TableCell>
        </TableRow>
      );
    } else {
      return topPickMovies?.map((movie, index) => (
        <TableRow key={index}>
          {/* # */}
          <TableCell>{index + 1}</TableCell>

          {/* Poster Image */}
          <TableCell className="hidden sm:table-cell">
            <img
              alt="Movie poster"
              className="aspect-square rounded-md object-cover"
              height="64"
              src={movie.poster || "/placeholder.svg"}
              width="64"
            />
          </TableCell>

          {/* Name */}
          <TableCell className="font-medium">{movie.name}</TableCell>

          {/* Rating */}
          <TableCell>{movie.rating}</TableCell>

          {/* Description */}
          <TableCell>{truncate(movie.description, 100)}</TableCell>

          {/* Release Date */}
          <TableCell className="hidden md:table-cell">
            {movie.releaseDate}
          </TableCell>

          {/* Type */}
          <TableCell className="hidden md:table-cell">{movie.type}</TableCell>

          {/* Trailer Link */}
          <TableCell>{movie?.trailer}</TableCell>
        </TableRow>
      ));
    }
  };
  const renderMoviesOfTheWeek = () => {
    if (loading) {
      return (
        <TableRow>
          <TableCell colSpan={8} className="text-center">
            Fetching movies?. Please wait...
          </TableCell>
        </TableRow>
      );
    } else if (!movies || movies?.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={8} className="text-center">
            No movies available
          </TableCell>
        </TableRow>
      );
    } else {
      return moviesOfTheWeek.map((movie, index) => (
        <TableRow key={index}>
          {/* # */}
          <TableCell>{index + 1}</TableCell>

          {/* Poster Image */}
          <TableCell className="hidden sm:table-cell">
            <img
              alt="Movie poster"
              className="aspect-square rounded-md object-cover"
              height="64"
              src={movie.poster || "/placeholder.svg"}
              width="64"
            />
          </TableCell>

          {/* Name */}
          <TableCell className="font-medium">{movie.name}</TableCell>

          {/* Rating */}
          <TableCell>{movie.rating}</TableCell>

          {/* Description */}
          <TableCell>{truncate(movie.description, 100)}</TableCell>

          {/* Release Date */}
          <TableCell className="hidden md:table-cell">
            {movie.releaseDate}
          </TableCell>

          {/* Type */}
          <TableCell className="hidden md:table-cell">{movie.type}</TableCell>

          {/* Trailer Link */}
          <TableCell>{movie?.trailer}</TableCell>
        </TableRow>
      ));
    }
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <Tabs defaultValue="all">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="vista-top-picks">Vista Top Picks</TabsTrigger>
          <TabsTrigger value="top-movies-of-the-week">{`Top Movies of The Week`}</TabsTrigger>
        </TabsList>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1"
            //   onClick={fetchAllProductsInStore}
          >
            <RefreshCcwDot className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Refresh
            </span>
          </Button>

          <Button size="sm" variant="outline" className="h-8 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add New Movie
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add a New Movie</DialogTitle>

                <AddMovieForm />
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <TabsContent value="all">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>All Movies</CardTitle>
            <CardDescription>
              Manage your Custom Top Movies, series, animations etc .
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Price</TableHead>

                  <TableHead className="hidden md:table-cell">
                    Created at
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>{renderAllMovies()}</TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between items-baseline w-full">
              <div className="text-xs text-muted-foreground">
                Showing{" "}
                <strong>
                  {itemOffset + 1}–
                  {lastCount > movies?.length ? movies?.length : lastCount}
                </strong>{" "}
                of <strong>{movies?.length}</strong> movies
              </div>
              <div className=" flex justify-end my-4">
                <Pagination
                  items={movies}
                  pageCount={pageCount}
                  setItemOffset={setItemOffset}
                  itemsPerPage={itemsPerPage}
                />
              </div>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="vista-top-picks">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Vista Top Picks</CardTitle>
            <CardDescription>
              Manage your Custom Top Movies, series, animations etc .
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Price</TableHead>

                  <TableHead className="hidden md:table-cell">
                    Created at
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>{renderTopPicksMovies()}</TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between items-baseline w-full">
              <div className="text-xs text-muted-foreground">
                Showing{" "}
                <strong>
                  {itemOffset + 1}–
                  {lastCount > movies?.length ? movies?.length : lastCount}
                </strong>{" "}
                of <strong>{movies?.length}</strong> movies
              </div>
              <div className=" flex justify-end my-4">
                <Pagination
                  items={movies}
                  pageCount={pageCount}
                  setItemOffset={setItemOffset}
                  itemsPerPage={itemsPerPage}
                />
              </div>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="top-movies-of-the-week">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Vista Top Movies of the Week</CardTitle>
            <CardDescription>
              {`Manage This week's Top Movies, series, animations etc .`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] sm:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">Price</TableHead>

                  <TableHead className="hidden md:table-cell">
                    Created at
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>{renderMoviesOfTheWeek()}</TableBody>
            </Table>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between items-baseline w-full">
              <div className="text-xs text-muted-foreground">
                Showing{" "}
                <strong>
                  {itemOffset + 1}–
                  {lastCount > movies?.length ? movies?.length : lastCount}
                </strong>{" "}
                of <strong>{movies?.length}</strong> movies
              </div>
              <div className=" flex justify-end my-4">
                <Pagination
                  items={movies}
                  pageCount={pageCount}
                  setItemOffset={setItemOffset}
                  itemsPerPage={itemsPerPage}
                />
              </div>
            </div>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

export default AllMovies;
