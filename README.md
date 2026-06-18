# 2do Parcial de Integración y Entrega Continua — UTNFRRe

Página web que calcula la edad a partir del año de nacimiento.
El foco no es la página sino el pipeline de CI/CD que la rodea.

## Stack

| Herramienta | Rol |
|---|---|
| HTML + CSS + JavaScript | Página estática |
| Jest | Tests unitarios |
| GitHub Actions | Servidor de CI/CD |
| Vercel | Entorno de producción |
| Discord | Feedback del pipeline |

## Requisitos previos

- [Node.js](https://nodejs.org)

## Correr localmente

Instalar dependencias:

```bash
npm install
```

Build completa (lint + tests + links):

```bash
npm run build
```

Levantar servidor local:

```bash
npm start
```

## Pipeline

El workflow está en `.github/workflows/ci-cd.yml` y corre en push y pull requests a `main`.

Los jobs corren en secuencia con `needs:` — si uno falla, los siguientes no corren.

| Job | Herramienta | Qué hace |
|---|---|---|
| `html-lint` | HTMLHint | Valida sintaxis HTML |
| `tests` | Jest | Corre tests unitarios |
| `link-checker` | Linkinator | Abre cada link del HTML y verifica que responda correctamente |
| `deploy` | Vercel CLI | Publica en producción (solo en `main`) |
| `notify` | Discord | Notifica el resultado siempre |
