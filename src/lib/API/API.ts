const BASE_URL =
  "https://cdn.contentful.com/spaces/nfckvg6bxiqt/environments/master/entries?access_token=UlAA-NdKS06UgWd3isjDU58pLoyrlL1xDJJ6ZcnMRXE&content_type=";

async function fetchProjectsData() {
  const resultFetch = await fetch(`${BASE_URL}portfolioProjects`);

  const json = await resultFetch.json();

  const data = json.items.map(({ fields }) => {
    return {
      imageId: fields.image.sys.id,
      linkDeploy: fields.linkDeploy,
      linkRepo: fields.linkRepo,
      title: fields.title,
      id: fields.idProject,
    };
  });

  const arrayIncludes = json.includes.Asset;

  data.forEach((x) => {
    let idEncontrado = searchAsset(x.imageId, arrayIncludes);
    x.image = idEncontrado.fields.file.url;
  });

  const sortedData = data.sort((a, b) => {
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
  });

  return sortedData;
}

async function fetchTechnologiesIcons() {
  const resultFetch = await fetch(`${BASE_URL}technologiesIcons`);

  const json = await resultFetch.json();

  const data = json.items.map(({ fields }) => {
    return {
      imageId: fields.icon.sys.id,
      title: fields.title,
      id: fields.iconID,
    };
  });

  const dataIncludes = json.includes.Asset;

  data.forEach((x) => {
    let idFounded = searchAsset(x.imageId, dataIncludes);
    x.image = idFounded.fields.file.url;
  });

  const dataSorted = data.sort((a, b) => {
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
  });

  return dataSorted;
}

function searchAsset(assetID, arrayIncludes) {
  const matchedID = arrayIncludes.find((x) => {
    return x.sys.id == assetID;
  });
  return matchedID;
}

async function fetchExperience() {
  const resultFetch = await fetch(`${BASE_URL}experience`);
  const json = await resultFetch.json();
  return json.items[0].fields.data;
}

export { fetchProjectsData, fetchTechnologiesIcons, fetchExperience };
