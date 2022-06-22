CREATE TABLE Turma(
    id VARCHAR(255) PRIMARY KEY, 
    nome VARCHAR(255) not null, 
    modulo VARCHAR(255)not null default 0
)



CREATE TABLE Estudante( 
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) not null,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255) 
    FOREIGN KEY (turma_id) REFERENCES Turma(id)
)


CREATE TABLE Hobby(
    id VARCHAR(255) PRIMARY KEY, 
    nome VARCHAR(255) NOT NULL UNIQUE
)

CREATE TABLE Estudante_Hobby(
    id VARCHAR(255) PRIMARY KEY, 
    estudante_id VARCHAR(255), 
    FOREIGN KEY (estudante_id) REFERENCES Estudante(id),
    hobby_id VARCHAR(255), 
    FOREIGN KEY (hobby_id) REFERENCES Hobby(id)
);


CREATE TABLE Docente(
    id VARCHAR(255) PRIMARY KEY, 
    nome VARCHAR(255), 
    email VARCHAR(255) NOT NULL UNIQUE, 
    data_nasc DATE NOT NULL, 
    turma_id VARCHAR(255),
    FOREIGN KEY (turma_id) REFERENCES Turma(id)
);

CREATE TABLE Especialidade(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Docente_Especialidade(
    id VARCHAR(255) PRIMARY KEY,
    docente_id VARCHAR(255),
    FOREiGN KEY (docente_id) REFERENCES Docente(id),  
    especialidade_id VARCHAR(255), 
    FOREIGN KEY especialidade_id REFERENCES Especialidade(id)
);