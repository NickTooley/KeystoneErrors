const { Keystone } = require('@keystonejs/keystone');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');

const PROJECT_NAME = 'Keystone Error';

const adapterConfig = { mongoUri: 'mongodb://localhost:27017/acquire' };

const userSchema = require('./models/users');
const dashSchema = require('./models/dashboard');

const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
  cookieSecret: "supersecret",
  cookie: {
    secure: false, // Default to true in production
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    sameSite: false,
  },
});

keystone.createList('Dash', dashSchema);
keystone.createList('User', userSchema);


const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: 'email',
    secretField: 'password', 
  },
});

module.exports = {
  keystone,
  apps: [new GraphQLApp(), new AdminUIApp({ name: PROJECT_NAME, enableDefaultRoute: true, authStrategy, adminPath:"/admin"})],
};
