const { Text, Password, DateTime, Select, Checkbox, Relationship } = require('@keystonejs/fields');

const options = [
    { value: 0, label: "User" },
    { value: 1, label: "Admin" },
    { value: 8192, label: 'Account Manager' },
];

module.exports = {
    fields: {
        username: {
            type: Text,
            isRequired: true,
        },
        fullName: {
            type: Text,
            isRequired: true,
        },
        email: {
            type: Text,
            isRequired: true,
        },
        password: {
            type: Password,
            defaultValue: false,
        },
        status: {
            type: Checkbox,
            defaultValue: false,
            label: "Locked"
        },
        verified: {
            type: Checkbox,
            defaultValue: false,
            label: "Verified",
            adminConfig: {
                isReadOnly: true,
            },      
        },
        resettable: {
            type: Checkbox,
            defaultValue: false,
            label: "Passsword Resettable"
        },
        rolesMask: {
            type: Select,
            options: options,
            dataType: "integer",
            label: "Role"
        },
        // dash: {
        //     type: Relationship,
        //     ref: "Dash",
        // },

    },
    labelField:"fullName",
};