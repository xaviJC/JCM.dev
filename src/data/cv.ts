export const profile = {
  name: 'Javier Campos Moñino',
  role: 'Senior Full Stack Developer',
  location: 'Madrid',
  email: 'javierhyws@gmail.com',
  linkedin: 'https://www.linkedin.com/in/javier-campos-dev/',
  cvFile: 'cv.pdf',
  cvDownloadName: 'Javier_Campos_CV.pdf',
};

export interface Job {
  company: string;
  role: string;
  period: string;
  points: { label?: string; text: string }[];
  stack: string[];
}

export const recentJobs: Job[] = [
  {
    company: 'Fusuma',
    role: 'Senior Full Stack Developer',
    period: '06/2025 – Actualidad',
    points: [
      {
        label: 'Mutua Pets',
        text: 'marketplace de mascotas sobre Medusa v2 (plataforma de e-commerce open source), con membresías y pagos recurrentes en Stripe. Gestión de la infraestructura con Terraform.',
      },
      {
        label: 'Mutua Home',
        text: 'web, backoffice y APIs sobre Firebase, con automatización de tareas e integraciones con proveedores.',
      },
      {
        label: 'Pleiful',
        text: 'asistente de compra con IA para e-commerce (Vercel AI SDK, OpenAI, Gemini y Supabase).',
      },
      {
        label: 'IA aplicada',
        text: 'agentes y subagentes con Claude Code, skills a medida y testing E2E con IA.',
      },
    ],
    stack: ['Medusa v2', 'Stripe', 'Firebase', 'Terraform', 'Vercel AI SDK', 'Supabase', 'Claude Code'],
  },
  {
    company: 'Entelgy',
    role: 'Full Stack Developer',
    period: '12/2023 – 06/2025',
    points: [
      {
        text: 'Aplicación de contratos para Aranzadi La Ley: diseño e implementación de la interfaz web con Angular y SCSS.',
      },
      { text: 'CI/CD con Azure.' },
    ],
    stack: ['Angular', 'SCSS', 'Azure'],
  },
  {
    company: 'Jakala Iberia',
    role: 'Full Stack Developer',
    period: '11/2021 – 11/2023',
    points: [
      { text: 'Aplicaciones internas con React y Redux sobre Google Cloud (Cloud Functions y Cloud Storage).' },
      { text: 'Gestión y seguimiento de datos con BigQuery y Cloud SQL.' },
      { text: 'Responsable del diseño de las interfaces con Bootstrap.' },
      { text: 'Medición con Google Tag Manager y Google Analytics.' },
      { text: 'Creación de tiendas e-commerce con Shopify.' },
    ],
    stack: ['React', 'Redux', 'Google Cloud', 'BigQuery', 'Cloud SQL', 'Shopify'],
  },
  {
    company: 'SAMYL',
    role: 'Full Stack Developer',
    period: '04/2019 – 09/2020',
    points: [
      {
        text: 'Web de proveedores para una empresa de servicios integrales, con un backoffice para la gestión de proveedores.',
      },
      { text: 'Toma de requisitos e interlocución entre el equipo de desarrollo y el cliente.' },
      { text: 'Frontend con Angular y Bootstrap; backend con Node.js (Express).' },
      { text: 'Diseño y creación de la base de datos en MySQL.' },
      { text: 'Testing con Jasmine.' },
    ],
    stack: ['Angular', 'Node.js', 'Express', 'MySQL', 'Jasmine'],
  },
];

export const earlierJobs: Job[] = [
  {
    company: 'Devoteam Drago',
    role: 'Programador ABAP',
    period: '09/2017 – 12/2018',
    points: [
      {
        label: 'ABB',
        text: 'mantenimiento de varios proyectos y desarrollo de nuevas funcionalidades (Dynpros, Smartforms, ALV, notas de SAP y enhancements). Reuniones con el cliente en español e inglés.',
      },
      {
        label: 'Metro de Madrid',
        text: 'implementación de nuevos requisitos con ALV y Dynpros en ABAP orientado a objetos.',
      },
    ],
    stack: [],
  },
  {
    company: 'ViewNext',
    role: 'Programador ABAP',
    period: '06/2017 – 08/2017',
    points: [{ label: 'Orange', text: 'mantenimiento de proyecto para el módulo SD.' }],
    stack: [],
  },
  {
    company: 'T-Systems',
    role: 'Programador ABAP',
    period: '11/2015 – 05/2017',
    points: [
      { label: 'Correos', text: 'implementaciones con WebDynpro en los módulos FI y SD; documentación de proyecto.' },
      { label: 'Airbus', text: 'catálogo para móviles con AngularJS, HTML y CSS.' },
      {
        label: 'Ayuntamiento de Palma de Mallorca',
        text: 'mantenimiento de plataforma a medida, toma de requisitos, Dynpros, ALV y Smartforms, WebServices (SoapUI) y presentaciones semanales de seguimiento con el cliente.',
      },
    ],
    stack: [],
  },
  {
    company: 'Ntinc',
    role: 'Desarrollador web',
    period: '04/2014 – 04/2015',
    points: [{ text: 'Maquetación y programación de páginas web con PHP, JavaScript, Bootstrap y AngularJS.' }],
    stack: [],
  },
];

export const skills = [
  { area: 'Frontend', items: ['Angular', 'React', 'Next.js', 'TypeScript', 'SCSS / CSS'] },
  { area: 'Backend y datos', items: ['Node.js', 'Firebase', 'Supabase', 'MySQL', 'BigQuery'] },
  { area: 'Cloud e infraestructura', items: ['Google Cloud', 'Azure', 'Terraform', 'Git / GitHub', 'CI/CD'] },
  { area: 'IA', items: ['Claude Code', 'Vercel AI SDK', 'OpenAI / Gemini'] },
  { area: 'Otros', items: ['Stripe', 'Shopify', 'WordPress', 'SAP ABAP'] },
  { area: 'Idiomas', items: ['Inglés B2'] },
];

export const projects = [
  {
    name: 'CanIPlay',
    url: 'https://caniplay.es',
    urlLabel: 'caniplay.es',
    text: 'Web que ayuda a los padres a decidir si un videojuego es adecuado para la edad de sus hijos. Los informes de cada juego se generan con IA (Google Gemini). Desarrollo propio con Next.js, TypeScript y Supabase.',
  },
  {
    name: 'Netsports',
    url: 'https://www.netsportsclub.com/',
    urlLabel: 'netsportsclub.com',
    text: 'Creación del sitio web de Netsports, club deportivo, con WordPress y mantenimiento posterior.',
  },
];

export const education = [
  {
    title: 'Bootcamp Web and Mobile Development',
    place: 'Codenotch',
    period: '10/2020 – 01/2021',
    detail: 'Angular, TypeScript, Ionic, JavaScript, Bootstrap, SQL y Git.',
  },
  {
    title: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
    place: 'CEPAL',
    period: '09/2013 – 06/2015',
    detail: '',
  },
];
