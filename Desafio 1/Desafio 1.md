Nome: **Lorenzo Gabriel Almeida Silva**

Disciplina: **Windows Server Management**

Professor: **Anderson Luiz Nogueira Vieira**

## Parte 1:

**1 - Domínio:** Deve ser criado o domínio lorenzo.intra:

**2 - Servidor:** server01

**3 - IP:** 192.168.0.1

![Nome Dominio](Nome%20Dominio.png)

![Server01](Server01.png)

## Parte 2:

### Active Directory:

**1 - Criar 2 Unidades Organizacionais:** TI e Financeiro.

**2 - Criar 5 usuários nas OU´s, sendo:**

- TI - 2 usuários, sendo um com meu nome(Lorenzo Almeida).
- Financeiro- 3 usuários.

**3 - Criar 2 computadores na OU Financeiro,** sendo eles COMP01 e COMP02.

**Estrutura de pastas:**

![Active Directory Domain Services](Active%20Directory%20Domain%20Services%20(installed).png)

**Financeiro com 3 usuários e 2 COMP01 e COMP02:**

![Financeiro Users](Financeiro%20-%20USERS.png)

**TI com 2 usuários:**

![TI Users](Ti%20-%20USERS.png)

## Parte 3:

Usuário “Lais Brum” do Financeiro foi escolhida para só usar a rede durante horário comercial:

![Logon Hours](Logon%20Hours%20-%20acesso%20limitado%20de%20horarios.png)

**Vitor para ter acesso a comp01 e comp02:**

![Logon Workstations](Logon%20Workstations%20-%20COMP01%20e%20COMP02.png)

## Parte 4:

**Deverá criar a pasta Corporativo no drive C: deste servidor e compartilhar a mesma.**

![Compartilhamento](Compartilhamento%20de%20arquivos.png)

## Parte 5:

**Dentro da pasta compartilhada Corporativo, deverá existir a seguinte estrutura:**

Corporativo
Corporativo\TI
Corporativo\Financeiro
Corporativo\Geral

![Estrutura](Compartilhamento%20de%20arquivos.png)

## Parte 6:

**Você deverá criar 2 Grupos de Segurança, Financeiro e TI e inserir os respectivos usuários nos mesmos.** 

![Grupos](Group%20-%20Global%20-%20Members.png)

1- Grupo Financeiros, com os respectivos membros:

![Membros Financeiro](Financeiro%20-%20USERS.png)

2- Grupo TI, com seus respectivos membros:

![Membros TI](Ti%20-%20USERS.png)

## Parte 7:

**Após criado estes grupos, deverá conceder a permissão necessária para que somente o grupo Financeiro acesse a pasta Financeiro, e somente o grupo TI acesse a pasta TI. Para a pasta geral, todos usuários poderão acessar.**

1- Permissão de Financeiro:

![Permissao Financeiro](Permissions%20for%20Financeiro%20-%20Group%20Financeiro%20-%20Treinamentos.png)

2- Permissão de TI:

![Permissao TI](Advanced%20Security%20Settings%20for%20RH%20Permissions.png)

3- Permissão de Geral:

![Permissao Geral](Permissions%20for%20Arquivos%20-%20Group%20or%20Users.png)
