# Autogit Command - Github Sync

A command for synchronizing repositories with GitHub.

## Install

```sh
npm install --save autogit-command-github-sync
```

## Usage

#### Options

This command uses the following options object:

```js
{
  token: '' // GitHub token
}
```

#### Configuration

Add this command to your configuration:

```js
const githubSync = require ( 'autogit-command-github-sync' );

module.exports = {
  commands: {
    'github-sync': githubSync ({ /* YOUR OPTIONS */ })
  }
}
```

#### CLI

Call it from the CLI with:

```sh
autogit github-sync
```

## License

MIT © Fabio Spampinato
