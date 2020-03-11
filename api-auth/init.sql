CREATE DATABASE IF NOT EXISTS dev;

USE dev;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS empresas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    razao_social VARCHAR(255) NOT NULL,
    nome_fantasia VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    tipo  INT NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS empresas_endereco (
    id INT AUTO_INCREMENT PRIMARY KEY,
    logradouro VARCHAR(255) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    cep VARCHAR(100) NOT NULL,
    cod_ibge VARCHAR(100) NOT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    empresas_id INT NOT NULL,
    CONSTRAINT fk_empresas_endereco
    FOREIGN KEY (empresas_id) 
        REFERENCES empresas(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
    
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS empresas_situacao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    situacao VARCHAR(255) NOT NULL,
    data TIMESTAMP NOT NULL DEFAULT NOW(),
    motivo VARCHAR(100) NOT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    empresas_id INT NOT NULL,
    CONSTRAINT fk_empresas_situacao
    FOREIGN KEY (empresas_id) 
        REFERENCES empresas(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
)  ENGINE=INNODB;

CREATE TABLE IF NOT EXISTS empresas_enquadramento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    natureza_juridica VARCHAR(150) NOT NULL,
    ente_federativo VARCHAR(150) NOT NULL,
    capital_social INT  NOT NULL,
    porte VARCHAR(100) NOT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    empresas_id INT NOT NULL,
    CONSTRAINT fk_empresas_enquadramento
    FOREIGN KEY (empresas_id) 
        REFERENCES empresas(id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
   
)  ENGINE=INNODB;

INSERT INTO usuarios (email,password)
VALUES('lucasrizel@ioasys.com.br','25d55ad283aa400af464c76d713c07ad');

INSERT INTO empresas (razao_social, nome_fantasia, email, tipo, telefone)
VALUES('INNOVATION OASYS DESENVOLVIMENT','INNOVATION OASYS','elizetem@uai.com.br', 1 ,'(31) 3636-5830');
INSERT INTO empresas (razao_social, nome_fantasia, email, tipo, telefone)
VALUES('AQM SERVICOS LTDA','AQM','fontanacontabilidade@terra.com.br', 1 ,'(51) 3374-1995');

INSERT INTO empresas_endereco (logradouro, bairro, cidade, cep, cod_ibge, empresas_id)
VALUES('Rua Dos Guajajaras, 715 - Sala 901','Lourdes','Belo Horizonte, MG','30180105','3106200', 1);
INSERT INTO empresas_endereco (logradouro, bairro, cidade, cep, cod_ibge, empresas_id)
VALUES('Avenida Ely Correa, 2713','Parque Dos Anjos',' Gravatai, RS','94190313','4309209', 2);

INSERT INTO empresas_situacao (situacao, motivo, empresas_id)
VALUES('Ativa','Não Há',1);
INSERT INTO empresas_situacao (situacao, motivo, empresas_id)
VALUES('Ativa','Não Há',2);

INSERT INTO empresas_enquadramento  (natureza_juridica,  ente_federativo, capital_social, porte, empresas_id)
VALUES('Sociedade Empresária Limitada','Não Há',30000,'EPP',1);
INSERT INTO empresas_enquadramento  (natureza_juridica,  ente_federativo, capital_social, porte, empresas_id)
VALUES('Sociedade Empresária Limitada','Não Há',10000,'ME',2);

DELETE FROM usuarios WHERE id > 2;
DELETE FROM empresas WHERE id > 2;
DELETE FROM empresas_endereco WHERE id > 2;
DELETE FROM empresas_situacao WHERE id > 2 ;
DELETE FROM empresas_enquadramento WHERE id > 2;


