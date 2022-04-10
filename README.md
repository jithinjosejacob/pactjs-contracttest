# PactJS project

A simple Nodejs + Jest project configuring contract tests with PactJS
<br>
If you are running your pact broker locally following these [instructions](https://github.com/pact-foundation/pact_broker#to-have-a-play-around-on-your-local-machine) then you can run the provider and the publish the way it is, otherwise you will need to modify the pactUrls to the local path and if you are using docker as your pact broker than you need to update the publish script accordingly.

**Folders**

1) tests - testcases
2) tests/contract/consumer - consumer tests
3) tests/contract/provider - provider tests
4) tests/contract/logs - logs for tests
5) tests/contract/provider - contract
6) tests/helpers - helpers for pact configuration
7) src- source code
8) src/data - test data

## Running via CLI

- Open your terminal on your project's folder
- Install Node packages:
  `npm install`
- Run the provider server  `http://localhost:8081`  (Client API/Service):
  `npm run provider`
- Run the consumer tests
  `npm run test-consumer`
- Run the provider tests
  `npm run test-provider`

Logs got generated in logs directory.

Contract got generated in pacts directory.
