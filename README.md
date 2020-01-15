# Tanks API

## Tanks API was developed using Node.js, Express and Sequelize

Clone this repository and run `npm install`.

-Related repo (client): https://github.com/LPascholatti/tanks-forms

-API Deployed on a Heroku server: https://tanks-api.herokuapp.com/

-CSV file: You can find a CSV containing all the data used in this Server.

-Endpoint:

This API can used sending GET and POST requests to `/tanks`.
You can also send GET requests by id to: `/tanks/:id`.

-JSON Object:

```
{
    "ammunition": [
        "AP",
        "APCR",
        "HE"
    ],
    "country": "USA",
    "createdAt": "2020-01-13T17:11:20.649Z",
    "id": 1,
    "img": "https://i.ytimg.com/vi/jbjWxMm3T3s/maxresdefault.jpg",
    "name": "T29",
    "type": "heavy",
    "updatedAt": "2020-01-13T17:11:20.649Z"
}
```
