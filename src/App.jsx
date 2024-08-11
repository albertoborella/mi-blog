import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { RouterPrincipal } from "./routes/RouterPrincipal";
import { Container } from "@mui/material";



function App() {
  
  const navLinks = [
    {
        title: "Home", path:"/"
    },
    {
        title: "Posts", path:"/posteos"
    },
    {
        title: "Nuevo", path:"/crear"
    },
  ]
  return (
    <>
      <Navbar navLinks={navLinks} />
      <Container sx={{ mt: 5 }}>
        <RouterPrincipal />
      </Container>
    </>
  );
}

export default App;
