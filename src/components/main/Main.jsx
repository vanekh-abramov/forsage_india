import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import style from "./Main.module.scss";
import { catalogue } from "../../data/catalogue.json";
import MediaCard from "./../card/MediaCard";
console.log(catalogue);

const Main = () => {
  return (
    <Box className={style.main}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {catalogue.map(({ article, name, brend }, i) => (
          <Grid key={i} size={{ xs: 2, sm: 4, md: 4 }}>
            <MediaCard
              key={i}
              article={article}
              name={name}
              brend={brend}
              image={`./public/photos/photos/${article}.png`}
              link={`${"/" + article}`}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Main;
