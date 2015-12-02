Gather Up
=========
App for gathering event sign ins

# Get started

1. Install Meteor https://www.meteor.com/install
2. git clone this repo
3. `cd mobile-src`
4. `meteor --settings settings.json`
5. visit `http://localhost:3000/`

# Running Tests

Acceptance tests are written using [Chimp](https://chimp.readme.io/docs/cheat-sheet). See the [webdriver.io documentation](http://webdriver.io/api/property/getSource.html) for how to interact with the browser in the spec tests.

Run meteor:

```sh
meteor --settings settings.json
```

Now go to your your `features/support/*.feature` file and add the annotation `@watch` to the feature or scenario you want to test while watching.

Run chimp:

```sh
npm install -g chimp
chimp --ddp=http://localhost:3000 --watch
```

