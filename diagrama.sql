CREATE TABLE `imovel` (
  `id` uuid PRIMARY KEY,
  `area` float,
  `urbano` boolean,
  `quarto` float,
  `banheiro` float,
  `vaga_estacionamneto` float,
  `andar` float,
  `aceita_animal` boolean,
  `mobiliada` boolean,
  `aluguel` float,
  `iptu` float,
  `seguro` float,
  `uf` varchar(255),
  `municipio` varchar(255),
  `endereco` varchar(255),
  `bairro` varchar(255),
  `proprietario` uuid
);

CREATE TABLE `proprietario` (
  `id` uuid PRIMARY KEY,
  `nome` varchar(255),
  `cargo` varchar(255),
  `telefone` float,
  `email` varchar(255),
  `contrato` varchar(255),
  `uf` varchar(255),
  `municipio` varchar(255),
  `endereco` varchar(255),
  `bairro` varchar(255)
);

CREATE TABLE `contrato` (
  `id` uuid PRIMARY KEY,
  `status` varchar(255),
  `imovel` uuid,
  `proprietario` uuid,
  `locatario` uuid,
  `corretor` uuid,
  `unidade` float,
  `data_inicio` date,
  `data_fim` date,
  `fiador` uuid
);

CREATE TABLE `fiador` (
  `id` uuid PRIMARY KEY,
  `nome` varchar(255),
  `telefone` float,
  `email` varchar(255),
  `cpf` string,
  `renda` float,
  `contrato` uuid
);

CREATE TABLE `locatario` (
  `id` uuid PRIMARY KEY,
  `nome` varchar(255),
  `telefone` float,
  `email` varchar(255),
  `cpf` float,
  `renda` float,
  `fiador` uuid,
  `contrato` uuid
);

CREATE TABLE `corretor` (
  `id` uuid PRIMARY KEY,
  `nome` varchar(255),
  `cpf` float,
  `cargo` varchar(255),
  `telefone` float,
  `email` varchar(255),
  `unidade` float
);

CREATE TABLE `imobiliaria` (
  `id` uuid PRIMARY KEY,
  `contrato` uuid,
  `corretor` uuid,
  `uf` string,
  `municipio` string,
  `enderco` string,
  `bairro` string,
  `franqueado` uuid
);

CREATE TABLE `franqueado` (
  `id` uuid PRIMARY KEY,
  `nome` varchar(255),
  `cpf` float,
  `telefone` float,
  `email` varchar(255),
  `status` varchar(255)
);

ALTER TABLE `imovel` ADD FOREIGN KEY (`proprietario`) REFERENCES `proprietario` (`id`);

ALTER TABLE `contrato` ADD FOREIGN KEY (`imovel`) REFERENCES `imovel` (`id`);

ALTER TABLE `contrato` ADD FOREIGN KEY (`proprietario`) REFERENCES `proprietario` (`id`);

ALTER TABLE `contrato` ADD FOREIGN KEY (`locatario`) REFERENCES `locatario` (`id`);

ALTER TABLE `contrato` ADD FOREIGN KEY (`corretor`) REFERENCES `corretor` (`id`);

ALTER TABLE `contrato` ADD FOREIGN KEY (`fiador`) REFERENCES `fiador` (`id`);

ALTER TABLE `fiador` ADD FOREIGN KEY (`contrato`) REFERENCES `contrato` (`id`);

ALTER TABLE `fiador` ADD FOREIGN KEY (`id`) REFERENCES `locatario` (`fiador`);

ALTER TABLE `locatario` ADD FOREIGN KEY (`contrato`) REFERENCES `contrato` (`id`);

ALTER TABLE `contrato` ADD FOREIGN KEY (`id`) REFERENCES `imobiliaria` (`contrato`);

ALTER TABLE `imobiliaria` ADD FOREIGN KEY (`corretor`) REFERENCES `corretor` (`id`);

ALTER TABLE `imobiliaria` ADD FOREIGN KEY (`franqueado`) REFERENCES `franqueado` (`id`);

ALTER TABLE `contrato` ADD FOREIGN KEY (`locatario`) REFERENCES `contrato` (`corretor`);
