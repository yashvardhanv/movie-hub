import { Box, Center, Grid, GridItem, Show, list } from "@chakra-ui/react"
import NavBar from "./componants/NavBar"
import MovieGrid from "./componants/MovieGrid"
import GenreList from "./componants/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlateformSelector from "./componants/PlateformSelector"
import { Item } from "./componants/PlateformSelector"
import PageDirection from "./componants/PageDirection"
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<Item | null>(null);
  const [searchText, setSearch] = useState("")
  const [page, setPage] = useState(1);


  const l = [{ name: null, value: null }, { name: "Popularity", value: "popularity.desc" }, { name: "Latest", value: "primary_release_date.desc" }, { name: "Top Rated", value: "vote_average.desc" }, { name: "Blockbusters", value: "revenue.desc" }]

  return (
  <>
  <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
    templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
    }}
  >
    <GridItem area="nav">
      <NavBar onSearch={(search) => setSearch(search)} searchText={searchText} />


    </GridItem>
    <Show above="lg">
      <GridItem area="aside" >
        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>
    </Show>
    <GridItem area="main">
      <PlateformSelector list={l} selectedFilter={selectedFilter} onSelectFilter={(filter) => setSelectedFilter(filter)} />
      <MovieGrid selectedGenre={selectedGenre} page={page} selectedFilter={selectedFilter} searchQuery={searchText} />
      <Center>
        <PageDirection changePage={(page) => { page > 0 && setPage(page) }} page={page} />
      </Center>
    </GridItem>

  </Grid>
  <Analytics/>
  </>
  )
}
export default App