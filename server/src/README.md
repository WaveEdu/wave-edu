# Struttura del progetto

Il progetto è strutturato nelle seguenti cartelle

```
.
├── src
│   ├── db               # contains the functions to interact with the database
│   ├── routes           # contains the server routes (endpoints)
│   ├── controllers      # contains the functions to interact with the client
│   ├── middlewares      # contains the middleware for routes (authentication, authorization, etc.)
│   ├── helpers          # contains utility functions
│   └── emails           # contains the templates used for sending emails
└── prisma
    └── schema.prisma    # contains the definition of the database
```

- `src`: contiene il codice sorgente
  - `src/db`: contiene le funzioni per interagire con il database
  - `src/routes`: contiene le routes del server (endpoints)
  - `src/controllers`: contiene le funzioni per interagire con il client
  - `src/middlewares`: contiene i middleware per le routes (autenticazione, autorizzazione, ecc.)
  - `src/helpers`: contiene funzioni di utilità
  - `src/emails`: contiene i tenplate usati per inviare email
- `prisma`:
  - `prisma/schema.prisma`: contiene la definizione del database

In ognuna delle cartelle sopra elencate ci sono dei file `index.js` che servono per importare i file contenuti nelle sottocartelle.
Ogni file ha un nome che descrive una certa funzionalità. `template.example` è un file di esempio che si può copiare e rinominare per iniziare a scrivere il tuo codice.

Alcuni file importanti:

- `docker-compose.yml`: contiene la configurazione per installare in locale un database MongoDB con altre 2 replicas per sfruttare le funzionalità di prisma
- `Dockerfile`: contiene la configurazione per il deploy delle API (su Render.com)
- `package.json`: contiene le dipendenze del progetto
- `.env`: contiene le variabili d'ambiente usate dal server
