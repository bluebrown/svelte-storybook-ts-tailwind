const autoPreprocess = require('svelte-preprocess');

module.exports = ({ config, mode }) => {
    const svelteLoader = config.module.rules.find(
        r => r.loader && r.loader.includes('svelte-loader'),
    );
    svelteLoader.options.preprocess = autoPreprocess({
        postcss: true,
        typescript: true,
    });
    config.resolve.extensions.push('.ts', '.svelte', 'css');
    return config;
};
