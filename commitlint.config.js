module.exports ={
    plugins: ['commitlint-plugin-jira-rules'],
    extends: ['jira'],
    rules: {
        'jira-task-id-max-lenght': [2, 'always', 10],
    }
};