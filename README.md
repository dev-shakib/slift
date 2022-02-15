# ShopLift

## Local Development

```bash
$ npm install
```

## Requirements

- If you don’t have one, [create a Shopify partner account](https://partners.shopify.com/signup).
- If you don’t have one, [create a Development store](https://help.shopify.com/en/partners/dashboard/development-stores#create-a-development-store) where you can install and test your app.
- In the Partner dashboard, [create a new app](https://help.shopify.com/en/api/tools/partner-dashboard/your-apps#create-a-new-app). You’ll need this app’s API credentials during the setup process.

### Environment Variables

SHOPIFY_API_KEY="YOUR_SHOPIFY_API_KEY"
SHOPIFY_API_SECRET="YOUR_SHOPIFY_SECRET"
HOST="YOUR_TUNNEL_URL"
SHOP="my-shop-name.myshopify.com"
SCOPES=read_products

### Starting Development Server

    $ shopify app serve

## Running the Tests

```
$ npm run test
```

## Deploying to Staging Server

Work in progress

## Contributing

We will have three major branches.

- `develop` : development (local)
- `staging` : staging server
- `master` : production server

1. Run `git config --global push.default simple` in your terminal once. You don't need to do it every time you contribute, just once.

2. Make sure you have latest `develop` locally:

```
git checkout develop
git pull
```

3. Create a new branch based on it:

```
git checkout -b feature/my_feature_branch
```

4. Commit and open a Pull Request

5. After code review is done and you update your branch, make sure that your Pull Requests is still mergeable.
   If there is a Github conflict with `develop`, and your branch is not merge-able anymore, pull the latest `develop` locally, then merge in your branch:

```
git checkout develop
git pull
git checkout feature/my_feature_branch
git merge develop
```

6. Fix the conflicts and push your branch. Try to fix it yourself by looking into `develop` branch changes, and figuring out what final behavior should do.

7. Make sure your Github PR diff shows only changes relevant to your feature.

For more advanced developers I strongly encourage you to use `git rebase` instead of `merge`. Double-check that your git push behaviour is set to simple: `git config --global push.default simple`

## Code Styles

Code style for front-end (react + redux) is inspired by [Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react).

Code style for back-end (node) is inspired by [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

## Some style guides

- Trailing comma is couraged
  - A lot of code changes in the beginning in the project
  - Easier to track commits with less line changes
- ESDoc coming
- Use eslint
- Stateless over stateful
- Always use redux when possible
- Ajax calls should be under 'api-'
  - Sometimes maybe not possible (?)
    - Case: code review
- Variable names should not be shortened!
  - ~~fb~~ facebook
  - ~~vcc~~ venueCarouselContainer
- Data in frontend and backend should coorelate
  - Backend model:
    - { foo_bar: bar_foo }
  - Front end:
    - { foo_bar: bar_foo }
- Only iew files end in JSX
- Commit messages:
  - \<filename> :<what changed, added, removed>

## Contributors

Outliant Team

Enjoy working! :)
