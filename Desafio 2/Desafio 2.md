# Desafio 2 - Windows Server Management

**Nome:** Lorenzo Gabriel Almeida Silva
**Disciplina:** Windows Server Management
**Professor:** Anderson Luiz Nogueira Vieira

---

## Escopo do Desafio

Tendo como base o servidor criado anteriormente, realizar as seguintes configurações:

### 1. Recursos Avançados de Servidor de Arquivos (FSRM)
- **Objetivo:** Bloquear a gravação de arquivos **MP3** e **MP4** na estrutura de pastas criada.
- **Ação:** Configurar a Triagem de Arquivos (File Screening) para impedir esses tipos de arquivo.

### 2. Servidor DHCP
- **Objetivo:** Criar um escopo de distribuição de IPs.
- **Configuração:**
    - **Pool de Endereços:** 192.168.0.150 até 192.168.0.200.
    - **Domínio:** lorenzo.intra.

### 3. Servidor DNS
- **Objetivo:** Criar um alias (CNAME).
- **Configuração:**
    - **Alias:** `www.lorenzo.intra`
    - **Destino:** 192.168.0.2

---

## Documentação da Implementação

### Parte 1: Bloqueio de Arquivos (File Screening)

![File Screen Template Block's](File%20Screen%20Template%20Block's.png)
![File Screen Template Block's Audio and video files](File%20Screen%20Template%20Block's%20Audio%20and%20video%20files.png)
![Source template Block Audio and Video Files](Source%20template%20Block%20Audio%20and%20Video%20Files.png)

### Parte 2: Configuração do DHCP

![ADD DHCP SERVER](ADD%20DHCP%20SERVER.png)
![DHCP - SCOPE 1](DHCP%20-%20SCOPE%201.png)
![DHCP - RESERVATION](DHCP%20-%20RESERVATION.png)

### Parte 3: Configuração do DNS

![DNS - ALIAS](DNS%20-%20ALIAS.png)
![DNS - Reverse Lookup Zone](DNS%20-%20Reverse%20Lookup%20Zone.png)
