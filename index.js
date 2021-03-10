#!/usr/bin/env node
const pkgJson = require('./package.json');
const welcome = require('cli-welcome');

welcome({
    title: 'nodeinthehole',
    description: pkgJson.description,
    version: pkgJson.version,
    bgColor: '#47d7ac',
    clear: false
});