
/* IMPORT */

import syncDescription from 'autogit-plugin-github-sync-description';
import syncKeywords from 'autogit-plugin-github-sync-keywords';
import pull from 'autogit-plugin-pull';
import push from 'autogit-plugin-push';

/* GITHUB SYNC */

const defaultOptions = {
  token: ''
};

function githubSync ( customOptions?: Partial<typeof defaultOptions> ) {

  const options = Object.assign ( {}, defaultOptions, customOptions );

  return {
    description: 'Sync commits, description and keywords with GitHub',
    skip: () => !options.token && 'You need to provide a GitHub token',
    plugins: [
      pull ({ remote: 'upstream' }),
      pull ({ remote: 'origin' }),
      push ({ remote: 'origin' }),
      syncDescription ({ token: options.token }),
      syncKeywords ({ token: options.token })
    ]
  };

}

/* EXPORT */

export default githubSync;
