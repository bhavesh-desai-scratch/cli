#!/usr/bin/env node

const program = require('commander');
const fs = require('fs');
const {routeTemplate} = require('./templates/index-template');
const {containerTemplate} = require('./templates/container-template');
const {reducerTemplate} = require('./templates/reducer-template');

program
    .arguments('<root>')
    .option('-r, --root <root>', 'The folder of the route')
    .action(
    routeName => {
        if (!fs.existsSync(routeName)) {
            fs.mkdirSync(routeName);
            fs.mkdirSync(`${routeName}/action`);
            fs.mkdirSync(`${routeName}/components`);
            fs.mkdirSync(`${routeName}/containers`);
        }

        fs.writeFile(`${routeName}/containers/${routeName}Container.tsx`, containerTemplate(routeName), (err) => {
            if (err) throw err;
        });

        fs.writeFile(`${routeName}/reducer.ts`, reducerTemplate(routeName), (err) => {
            if (err) throw err;
        });

        fs.writeFile(`${routeName}/index.ts`, routeTemplate(routeName), (err) => {
            if (err) throw err;
        });
    })
    .parse(process.argv);