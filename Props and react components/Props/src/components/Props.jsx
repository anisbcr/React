import React, { useState } from "react";
import "../components/Props.css";

function Props({ name, image, types, setTasks }) {
  const deletePokemon = (name) => {
    // Utilisez le nom du Pokémon pour le filtrer et supprimer la carte
    setTasks((prevPokemons) =>
      prevPokemons.filter((pokemon) => pokemon.name !== name)
    );
  };
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} className="pokemon-image" />
      <h2 className="pokemon-name">{name}</h2>
      <div className="pokemon-types">
        {types.map((type, index) => (
          <span key={index} className="pokemon-type">
            {type}
          </span>
        ))}
      </div>
        <button onClick={() => deletePokemon(name)} className="delete">Delete</button>
    </div>
  );
}
export default Props;
// import React, { useState } from "react";

// const TodoItem = ({ text, tasks, setTasks }) => {
//   const [newTask, setNewTask] = useState("");

//   const deleteTask = (text) => {
//     const updatedTasks = tasks.filter((i) => i !== text);
//     setTasks(updatedTasks);
//   };

//   const handleChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Empêche le rechargement de la page
//     if (newTask.trim()) {
//       setTasks([...tasks, newTask]);
//       setNewTask(""); // Réinitialise le champ de saisie
//     }
//   };

//   return (
//     <div className="todo">
//       <li>{text}</li>
//       <button className="del" onClick={() => deleteTask(text)}>
//         DELETE
//       </button>
//       <form onSubmit={handleSubmit} className="todo add-task">
//         <input
//           type="text"
//           value={newTask}
//           onChange={handleChange}
//           placeholder="Add a new task"
//           autoComplete="off"
//         />
//         <button className="add" type="submit">
//           Add
//         </button>
//       </form>
//     </div>
//   );
// };

// export default TodoItem;
