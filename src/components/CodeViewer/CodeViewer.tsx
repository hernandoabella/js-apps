import React, { useEffect, useState } from "react";

interface CodeViewerProps {
  repositories: string[]; // Array de URLs de repositorios en GitHub
  filePaths: string[]; // Array de rutas de archivos de código dentro de los repositorios
}

const CodeViewer: React.FC<CodeViewerProps> = ({ repositories, filePaths }) => {
  const [code, setCode] = useState<string[]>([]);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const codePromises = repositories.map(async (repository, index) => {
          const filePath = filePaths[index];

          // Hacer la solicitud a la API de GitHub para obtener el código
          const response = await fetch(
            `https://api.github.com/repos/${repository}/contents/${filePath}`,
            {
              headers: {
                Authorization: "Bearer <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>",
              },
            }
          );

          if (response.ok) {
            const { content } = await response.json();
            const decodedContent = atob(content); // Decodificar el contenido base64

            return decodedContent;
          } else {
            console.error(
              `Error al obtener el código del repositorio ${repository}`
            );
            return "";
          }
        });

        const codeResults = await Promise.all(codePromises);

        setCode(codeResults);
      } catch (error) {
        console.error("Error al obtener el código de los repositorios de GitHub", error);
      }
    };

    fetchCode();
  }, [repositories, filePaths]);

  return (
    <div>
      {code.map((c, index) => (
        <div key={index}>
          <pre>{c}</pre>
        </div>
      ))}
    </div>
  );
};

export default CodeViewer;
