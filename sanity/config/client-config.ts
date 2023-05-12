const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;


const config = {
  projectId,
  dataset: 'production',
  apiVersion: '2023-05-10',
  useCdn: true,
};

export default config;
