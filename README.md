# my-proyect

Proyecto de práctica con React y Vite para ejercitar la creación y reutilización de componentes.

## Integrantes — Grupo 4

| Apellidos | Nombres |
| --- | --- |
| MECHÁN ENEQUE | JUAN ENRIQUE |
| MORA DAMIAN | CHRISTIAN ALFREDO |
| MURGA CASTRO | ANDRÉ ALEXANDER |
| ROMERO CANAQUIRI | ROLIN ROY |

## Stack

- React 19
- Vite 8
- Oxlint como linter

## Requisitos

Node.js 24 o superior.

## Comandos

```bash
npm install       # instala las dependencias
npm run dev       # servidor de desarrollo con recarga en caliente
npm run build     # generación para producción en dist/
npm run preview   # sirve la generación de dist/ de forma local
npm run lint      # revisa el código con Oxlint
```

## Estructura

```
index.html            punto de entrada del navegador, monta #root
src/
  main.jsx            crea la app React y renderiza <App />
  App.jsx             componente raíz: título y los <Menu />
  index.css           estilos globales
  App.css             estilos del componente raíz
  components/
    menu.jsx          componente de menú reutilizado varias veces
    menu.css          estilos del menú
  assets/             imágenes del proyecto
public/               archivos estáticos servidos tal cual
```
