import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Definimos dónde buscar los archivos (carpeta 'content' en la raíz)
const postsDirectory = path.join(process.cwd(), 'content');

// Definimos el tipo de datos para un Post (para que TypeScript no se queje)
export interface PostData {
  id: string;
  date: string;
  title: string;
  description?: string;
  author?: string;
  contentHtml?: string;
}

// FUNCIÓN 1: Obtener la lista de todos los posts ordenados por fecha
export function getSortedPostsData(): PostData[] {
  // 1. Obtener los nombres de los archivos en /content
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // 2. Quitar la extensión ".md" para usar el nombre como ID (slug)
    const id = fileName.replace(/\.md$/, '');

    // 3. Leer el contenido del archivo como texto plano
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 4. Usar gray-matter para separar los metadatos (título, fecha) del contenido
    const matterResult = matter(fileContents);

    // 5. Devolver los datos combinados
    return {
      id,
      ...(matterResult.data as { date: string; title: string; description: string; author: string }),
    };
  });

  // 6. Ordenar posts por fecha (del más nuevo al más viejo)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// FUNCIÓN 2: Obtener los datos de UN solo post específico (incluyendo el contenido HTML)
export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Usar gray-matter para parsear los metadatos
  const matterResult = matter(fileContents);

  // Usar remark para convertir el markdown a HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
    
  const contentHtml = processedContent.toString();

  // Devolver todo junto
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; description: string; author: string }),
  };
}