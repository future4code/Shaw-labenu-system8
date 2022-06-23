import express from 'express'; 
import cors from "cors"; 
import * as endpoints from "./endpoints"
import { registrarTurma } from './endpoints/registrarTurma';

const app = express(); 

app.use(express.json())
app.use(cors()); 

app.post("/turma",registrarTurma)

app.post("/estudante", endpoints.registrarEstudante)
app.get("/estudante/:nome", endpoints.buscarEstudantePorNome)
app.put("/estudante/:id", endpoints.redefinirTurmaDoAluno)




export default app; 