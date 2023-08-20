

O objetivo desse repositório é entregar uma aplicação web integrada com a AWS, ou seja, utilizando as ferramentas de computação em nuvem e banco de dados. 

# Passo a passo

## Criar uma instância no EC2

Inicialmente foi instanciada uma máquina no EC2. O Amazon EC2 é um serviço Web que fornece capacidade computacional redimensionável na nuvem. Ele foi projetado para facilitar a computação em escala na Web para os desenvolvedores.

## Criar uma instância MySql DB

O Amazon Relational Database Service (Amazon RDS) é um serviço da Web que facilita a configuração, a operação e escalabilidade de um banco de dados relacional na Nuvem AWS. Ele fornece capacidade econômica e redimensionável para um banco de dados relacional padrão do setor e gerencia tarefas comuns de administração de banco de dados.

## Instalar um Web Server na instância EC2

Nessa última etapa instalamos um servidor web na instância EC2 que foi criada anteriormente. O web server também é conectado com a instância do Amazon RDS já existente.


# Código

O código da pasta webAppAws.php implementa um sistema básico de gerenciamento de usuários com funcionalidades de adição de usuários através de um formulário HTML e exibição dos usuários existentes em uma tabela HTML. As funções são usadas para verificar e criar a tabela de usuários, enquanto as informações do banco de dados são protegidas contra injeção de SQL usando funções de escape.


