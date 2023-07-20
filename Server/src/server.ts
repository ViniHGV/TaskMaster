import fastify from "fastify";

const app = fastify();

app
  .listen({
    port: 3333,
  })
  .then(() => console.log("🚀 Servidor Inicializado http://localhost:3333"));

app.get("/", () => {
  return "Sou Foda";
});
