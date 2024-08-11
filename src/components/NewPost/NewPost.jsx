import { useState } from "react";
import styles from './newpost.module.css'

const NewPost = ({agregarPost}) => {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (e) => {
        const agregarNuevo = {
            ID: inputValue,
            usuario_id: inputValue,
            nombre_usuario: inputValue,
            titulo: inputValue,
            texto: inputValue
        }
        e.preventDefault();
        agregarPost(datos => [...datos, agregarNuevo])
    };

  return (
    <>
    <h1 className={styles.titulo}>Nuevo Post</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="id">id:</label>
        <input type="text" id="id" name="id" value={inputValue} onChange={onInputChange}></input><br/>
        <label htmlFor="usuario_id">Usuario_id:</label>
        <input type="text" id="usuario_id" name="usuario_id" value={inputValue} onChange={onInputChange}></input><br/>
        <label htmlFor="nombre_usuario">Nombre de usuario:</label>
        <input type="text" id="nombre_usuario" name="nombre_usuario" value={inputValue} onChange={onInputChange}></input><br/>
        <label htmlFor="titulo">Titulo:</label>
        <input type="text" id="titulo" name="titulo" value={inputValue} onChange={onInputChange}></input><br/>
        <label htmlFor="texto">Texto:</label>
        <textarea id="texto" name="texto" rows={8} value={inputValue} onChange={onInputChange}></textarea><br/>
        <button type="submit">Agregar Post</button>
    </form>
    </>


)
}

export default NewPost