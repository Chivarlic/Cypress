/* eslint-disable @typescript-eslint/no-var-requires */
var path = require('path');
var shell = require('shelljs');
var fs = require('fs');

//pass test type as environment variable or take default value as 'e2e'
var testType = process.env.CYPRESS_testType || '';
var deviceType = process.env.CYPRESS_deviceType || '';
var browser = process.env.CYPRESS_browser || 'chrome';
var currentDirPath = path.join(
    __dirname,
    '..cypress/integration/' + testType + '/' + deviceType,
);
var currentTestResultPath = path.join(
    __dirname,
    '..cypress/reports/'
);
var testStatus = true;
function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}
// run the automation test suites
 walkSync(currentDirPath, function (filePath, stat) {
    if (
        shell.exec(
            'npx cypress run --headless --browser ' + browser + ' --spec ' + filePath,
        ).code !== 0
    ) {
        testStatus = false;
        shell.echo('Error: ' + testType + ' testing failed');
    }
});
// generate the test report
try {
    if (fs.existsSync(currentTestResultPath + 'mochawesome/mochawesome.json')) {
        if(
            shell.exec(
                'npx mochawesome-merge ' +
                    currentTestResultPath +
                    'mochawesome/*.json > ' +
                    currentTestResultPath +
                    'mochawesome.json',
            ).code !== 0
        ) {
            shell.exec(
                'npx mochawesome-report-generator --reportTitle Test Automation Report --reportDir ' + 
                currentTestResultPath + 
                ' --cdn true charts true'  +
                currentTestResultPath +
                'mochawesome.json',
            );
            shell.echo('Test report generated successfully');
            shell.exec('rm -rf ' + currentTestResultPath + 'mochawesome');
        }
        else {
            shell.echo('Error: Failed to merge reports');
        }
    }
        else {
            shell.echo('No test Report generated');
        }
    } catch(err) {
            shell.echo('Error: No test report genrated')
    }
     if(!testStatus){
        shell.exit(1);
     }