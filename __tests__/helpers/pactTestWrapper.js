jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000

// Set up provider setup mock.
beforeAll(() => provider.setup())

// Finalize/Close the provider mock.
afterAll(() => provider.finalize())
