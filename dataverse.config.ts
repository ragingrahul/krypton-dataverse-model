export const config = {
  name: "dataverse_app_base_example", // app name should NOT contain "-"
  logo: "https://bafybeifozdhcbbfydy2rs6vbkbbtj3wc4vjlz5zg2cnqhb2g4rm2o5ldna.ipfs.w3s.link/dataverse.svg",
  website: ['localhost:3000','https://krypton-dataverse-os.vercel.app/','https://ethindia-main.vercel.app/'], // you can use localhost:(port) for testing
  defaultFolderName: "Main",
  description: "Krypton",
  models: [
    {
      isPublicDomain: true,
      schemaName: 'user.graphql',
      encryptable: [],
    },
    {
      isPublicDomain: true,
      schemaName: 'guardian.graphql',
      encryptable: [],
    },
  ],
  ceramicUrl: null, // leave null to use dataverse test Ceramic node. Set to {Your Ceramic node Url} for mainnet, should start with "https://".
};
