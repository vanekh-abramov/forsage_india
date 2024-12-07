import style from "./App.module.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Container } from "@mui/system";
import { Route, Routes } from "react-router";
import ProfileCard from "./pages/profileCard/ProfileCard";
// import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box className={style.app}>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/:id' element={<ProfileCard />} />
          </Routes>
          {/* <Outlet /> */}
          {/* <Main />*/}
          <Footer />
        </Box>
      </Container>
    </>
  );
};

export default App;
