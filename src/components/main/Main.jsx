import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import style from "./Main.module.scss";
import { catalogue } from "../../data/catalogue.json";
import MediaCard from "./../card/MediaCard";
import { useState } from "react";
console.log(catalogue);
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Main = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const count = Math.ceil(catalogue.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const catalogueMap = catalogue.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box className={style.main}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {catalogueMap.map(({ article, name, brend }, i) => (
          <Grid key={i} size={{ xs: 2, sm: 4, md: 4 }}>
            <MediaCard
              key={i}
              article={article}
              name={name}
              brend={brend}
              image={`https://forsage-th-in-catalogue.netlify.app/photos/photos/${article}.png`}
              link={`${"/" + article}`}
            />
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2} sx={{ m: 3 }}>
        <Pagination
          count={count}
          page={page}
          onChange={handleChange}
          variant='outlined'
          shape='rounded'
        />
      </Stack>
    </Box>
  );
};

export default Main;
