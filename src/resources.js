import { unstable_createResource as createResource } from 'react-cache';

export const github = {
  repos: createResource(async text => {
    const resp = await fetch(
      `https://api.github.com/search/repositories?q=${text}&sort=stars&order=desc`,
    );
    return resp.json();
  }),
};
