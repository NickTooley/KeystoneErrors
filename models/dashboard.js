const { Text, Url, Relationship} = require('@keystonejs/fields');

module.exports = {
    fields: {
        title: {
            type: Text,
            isRequired: true,
        },
        embedCode:{
            type: Url,
            isRequired: true,
        },
        users:{
            type: Relationship,
            ref: 'User',
            many: true,
        }
    },
    labelField: "title"
};