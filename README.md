0: Environment Configuration : Mocha Boilerplate
mocha-demo
- ~ mkdir mocha-demo
- mocha-demo/ mkdir test
- mocha-demo/ mkdir lib
- mocha-demo/ npm init (set test: mocha)
- mocha-demo/ npm install mocha —save

1: Setting up Your Test Suite (Semantically)
mocha-demo-1
- Organization
    - Describe
    - Nested Describe
    - it (in suite/out of suite)
- Pending (code)

2: Running Tests on Modules/Functions
mocha-demo-2
- Require in the modules you’d like to test
- Then just call them inside it blocks like you would anywhere else

3: Mocha Hooks with before()/after() and beforeEach()/afterEach()
mocha-demo-3
- keeping your states clean

4: Bring it All Together: Basic Assertion Library
mocha-demo-4

5: Expanding our Assertion Vocabulary with Chai
mocha-demo-5
- mocha-demo-5/ npm install chai —save-dev
- using chai to semantically check values

6: Running in Browser
mocha-demo-6
