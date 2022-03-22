async function fetchProjectsData() {
  const resultFetch = await fetch(
    "https://cdn.contentful.com/spaces/nfckvg6bxiqt/environments/master/entries?access_token=UlAA-NdKS06UgWd3isjDU58pLoyrlL1xDJJ6ZcnMRXE&content_type=portfolioProjects"
  );

  const json = await resultFetch.json();

  console.log(json);

  const arrayData = json.items.map((item) => {
    return {
      imageId: item.fields.image.sys.id,
      linkDeploy: item.fields.linkDeploy,
      linkRepo: item.fields.linkRepo,
      title: item.fields.title,
      id: item.fields.idProject,
    };
  });

  const arrayIncludes = json.includes.Asset;

  arrayData.forEach((x) => {
    let idEncontrado = searchAsset(x.imageId, arrayIncludes);
    x.image = idEncontrado.fields.file.url;
  });

  const arrayDataSorted = arrayData.sort((a, b) => {
    console.log(a.id, b.id);

    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
  });

  return arrayDataSorted;
}

function searchAsset(assetID, arrayIncludes) {
  const coincidenciaID = arrayIncludes.find((x) => {
    return x.sys.id == assetID;
  });
  return coincidenciaID;
}

export { fetchProjectsData };
