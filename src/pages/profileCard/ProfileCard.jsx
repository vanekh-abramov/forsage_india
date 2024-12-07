import { Box, Typography } from "@mui/material";
import { catalogue } from "../../data/catalogue.json";
import { useParams } from "react-router-dom";

const ProfileCard = () => {
  const { id } = useParams();
  console.log(id);
  const windowWidth = window.innerWidth;
  const cardToShow = catalogue.find((item) => item.article === id);
  return (
    <Box display={"flex"} flexDirection={windowWidth < 540 && "column"}>
      <img
        src={`https://forsage-th-in-catalogue.netlify.app/photos/photos/${cardToShow.article}.png`}
        alt=''
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        gap={5}
      >
        <Typography variant='h4'>{cardToShow.article}</Typography>
        <Typography>{cardToShow.description}</Typography>
        <Typography>Wholesale Price: {cardToShow["without VAT"]}$</Typography>
      </Box>
    </Box>
  );
};

export default ProfileCard;
