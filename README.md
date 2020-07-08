Global-relay

## Description

The [Unsplash](https://unsplash.com/documentation#search-photos) API was used instead of Twitter because of CORS error.

The Twitter API returns an error which can't be resolved without backend server with configured CORS:
![Screen Shot 2020-07-06 at 8 13 13 PM](https://user-images.githubusercontent.com/2269864/86700406-f3533300-bfc5-11ea-8a93-d8e11b156bb1.png)

Unsplash API returns a json:
The fields: `id, description, created_at, urls.thumb, user.links.html, user.first_name, user.last_name, user.username` were used in the assignment (Almost the same fields that are used on Twitter API)

```
"results": [
    {
      "id": "eOLpJytrbsQ",
      "created_at": "2014-11-18T14:35:36-05:00",
      "width": 4000,
      "height": 3000,
      "color": "#A7A2A1",
      "likes": 286,
      "liked_by_user": false,
      "description": "A man drinking a coffee.",
      "user": {
        "id": "Ul0QVz12Goo",
        "username": "ugmonk",
        "name": "Jeff Sheldon",
        "first_name": "Jeff",
        "last_name": "Sheldon",
        "instagram_username": "instantgrammer",
        "twitter_username": "ugmonk",
        "portfolio_url": "http://ugmonk.com/",
        "profile_image": {
          "small": "...",
          "medium": "...",
          "large": "..."
        },
        "links": {
          "self": "https://api.unsplash.com/users/ugmonk",
          "html": "http://unsplash.com/@ugmonk",
          "photos": "https://api.unsplash.com/users/ugmonk/photos",
          "likes": "https://api.unsplash.com/users/ugmonk/likes"
        }
      },
      "current_user_collections": [],
      "urls": {
        "raw": "...",
        "full": "...",
        "regular": "...",
        "small": "...",
        "thumb": "..."
      },
      "links": {
        "self": "https://api.unsplash.com/photos/eOLpJytrbsQ",
        "html": "http://unsplash.com/photos/eOLpJytrbsQ",
        "download": "http://unsplash.com/photos/eOLpJytrbsQ/download"
      }
    },
    // more photos ...
  ]
```
## Screenshot
![Screen Shot 2020-07-07 at 6 00 37 PM](https://user-images.githubusercontent.com/2269864/86861433-f1e44200-c07b-11ea-9890-6a80d16bff40.png)

## Usage

Install the dependencies

```
yarn install
```

In the project directory, you can run:

```
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```
yarn test
```

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
