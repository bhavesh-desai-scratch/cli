const {slug, camel} = require('to-case');

module.exports = {
    reducerTemplate(name) {
        return `import { Action, HandleAction } from 'common';

export const reducer = (state = {}, action) => {
    return state;
};`;
    }
};
