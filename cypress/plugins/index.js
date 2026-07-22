module.exports = (on) => {
    on('task', {
        log(message){
            console.log(message);
            return null;
        },
    });
};

module.exports = (on, config) => {
    // add --disable-dev-shm-usage chrome flag
    on('before:browser:launch', (browser, launchOptions) => {
        console.log('browser family: ', browser.family);
        if(browser.family === 'chromium'){
            console.log('Adding chrome flag: --disable-dev-shm-usage');
            launchOptions.args.push('--disable-dev-shm-usage');
        }
        return launchOptions;
    });
};