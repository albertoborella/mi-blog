import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Posteos/posteos.module.css";
import { Card, CardContent } from "@mui/material";
import NewPost from "../NewPost/NewPost";

export const Posteos = () => {
  const posts = [
    {
      id: 12,
      titulo: "Spiderman",
      texto:
        "Joven héroe con poderes arácnidos que combate el crimen balanceándose por Nueva York.",
      user_id: 7,
      usuario: "stan_lee",
    },
    {
      id: 14,
      titulo: "X-MEN",
      texto:
        "Equipo de mutantes con habilidades únicas que luchan por la coexistencia pacífica entre humanos y mutantes.",
      user_id: 7,
      usuario: "stan_lee",
    },
    {
      id: 16,
      titulo: "Capitán América",
      texto:
        "Soldado mejorado con un escudo indestructible que lidera a los Vengadores en la defensa del mundo.",
      user_id: 7,
      usuario: "stan_lee",
    },
    {
      id: 17,
      titulo: "Thanos",
      texto:
        "Titán obsesionado con el poder y las Gemas del Infinito, busca la aniquilación para equilibrar el universo.",
      user_id: 7,
      usuario: "stan_lee",
    },
    {
      id: 18,
      titulo: "Ant-Man",
      texto:
        "Héroe capaz de encogerse y controlar insectos con un traje especial para combatir el mal.",
      user_id: 7,
      usuario: "stan_lee",
    },
  ];

  const [datos, setDatos] = useState(posts);

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      {/* <NewPost agregarPost={setDatos}/> */}
      {datos.map((dato) => (
        <>
          <Card className={styles.card} key={dato.id}>
          <CardContent>
              <li className={styles.titulo}>{dato.titulo}</li>
              <p className={styles.resumen}>{dato.texto}</p>
              <button className={styles.boton}>
                <Link to={`${dato.id}`} className={styles.boton}>Leer</Link>
              </button>
              <button
                className={styles.boton}
                onClick={() => alert(`Modificar Post ID: ${dato.id}`)}
              >
                Modificar
              </button>
              </CardContent>
          </Card>
        </>
      ))}
    </div>
  );
};
