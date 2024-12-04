const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send({
    msg: "Hello World",
  });
});

app.get("/user", (req, res) => {
  res.send({
    id: "1",
    name: "Jordi",
    lastname: "Galobart",
  });
});

app.get("/tasks", (req, res) => {
  res.send([
    {
      description: "Preparar la clase de Nuclio Full Stack Developer",
      status: "IN PROGRESS",
      dueDate: "28 NOV 2024",
    },
    {
      description:
        "Devolver libros a la biblioteca y recoger nuevos libros sobre ciencia ficción",
      status: "DONE",
      dueDate: "04 DIC 2024",
    },
    {
      description:
        "Preparar las maletas y contratar el seguro de viaje a Marte",
      status: "TO DO",
      dueDate: "03 MAY 2025",
    },
    {
      description: "Desarrollar un robot para que pueda programar por mi",
      status: "TO DO",
      dueDate: "25 DIC 2027",
    },
  ]);
});

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
