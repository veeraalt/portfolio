export const getProjects = async (language: string) => {
  const response = await fetch(`/data/projects_${language}.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch projects for language: ${language}`);
  }
  return response.json();
};
