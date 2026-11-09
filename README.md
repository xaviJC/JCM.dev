# Portfolio Personal

Este es un portfolio personal desarrollado con Astro y Tailwind CSS, que muestra mi experiencia profesional y habilidades técnicas.

## Características

- Diseño responsive con menú móvil
- Modo claro/oscuro con botón (recuerda la elección y, si no hay, sigue al sistema)
- Experiencia, tecnologías, proyectos propios, formación y contacto
- Descarga de CV (`public/cv.pdf`)
- SEO: descripción, URL canónica, Open Graph y favicon

Publicado en https://xavijc.github.io/JCM.dev/ (se despliega con GitHub Pages al hacer push a `master`).

## Cómo actualizar el contenido

Todo el contenido (experiencia, tecnologías, proyectos, formación y datos de contacto) está en `src/data/cv.ts`. Para cambiar el CV descargable, sustituye `public/cv.pdf`.

## Tecnologías Utilizadas

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript

## Desarrollo Local

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abre [http://localhost:4321](http://localhost:4321) en tu navegador

## Construcción

Para construir el proyecto para producción:

```bash
npm run build
```

Los archivos generados estarán en el directorio `dist/`. 