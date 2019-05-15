# ECHO TEST APP

## Diseño

Esta aplicación consiste en una API con el servicio de eco. La misma ofrece dos endpoints para la realización de este servicio.

El primer endpoint es un GET sobre *echo*. El mismo puede definirse como:

    GET /echo/<string a retornar>

Parametros: **Ninguno**

Respuesta:
    
    {
        "text": "<string a retornar>"
    }

El segundo endpoint es un POST sobre *echo*. El mismo puede definirse como:

    POST /echo

Parametros: 

    {
        text: "<string a retornar>"
    }

Respuesta:
    
    {
        "text": "<string a retornar>"
    }

## Como correrlo

El proyecto fue desarrollado con las siguientes tecnologias:

- Nodejs 8.14.0
- NPM 6.9.0

Para correr esta aplicación, basta con ejecutar los siguientes comandos:

    cd <path del proyecto>
    npm install
    npm run dev

O con docker:

    docker build -t echo-server .
    docker run -p 8080:8080 -d echo-server

