import express from 'express'; 
import cors from "cors"; 
import * as endpoints from "./endpoints"
import { registrarTurma } from './endpoints/registrarTurma';
import { mudarTurmaDeModulo } from './endpoints/mudarTurmaDeModulo';
import { buscarTurmas } from './endpoints/buscarTurmas';
import { criarDocente } from './endpoints/criarDocente';
import { buscarDocente } from './endpoints/buscarDocente';
import { atualizarTurmaDocente } from './endpoints/atualizarTurmaDocente';


const app = express(); 

app.use(express.json())
app.use(cors()); 

app.post("/turma", registrarTurma)
app.put("/turma/:turmaId", mudarTurmaDeModulo)
app.get("/turma", buscarTurmas) 
app.post("/estudante", endpoints.registrarEstudante)
app.get("/estudante/:nome", endpoints.buscarEstudantePorNome)
app.put("/estudante/:id", endpoints.redefinirTurmaDoAluno)
app.post("/docente", criarDocente)
app.get("/docente", buscarDocente)
app.put("/docente/:id",atualizarTurmaDocente)


export default app; 