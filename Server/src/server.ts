import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient()

app.listen({
    port: 3333,
  })
  .then(() => console.log("🚀 Servidor Inicializado http://localhost:3333"));

app.get("/", ()=> {
  const users = prisma.user.findMany()
  const Tasks = prisma.tasks.findMany()
  return Tasks
})