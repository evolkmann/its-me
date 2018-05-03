const gulpRequireTasks = require('gulp-require-tasks');
const gulp = require('gulp');

/**
 * Gulp Commands are separated and can be found in the /gulp-tasks/ directory.
 * Please only use the commands found in README.md or package.json
 */
gulpRequireTasks({
    path: `${process.cwd()}/gulp-tasks`,
    separator: ':',
    passGulp: true,
    passCallback: true,
    gulp: gulp
});
