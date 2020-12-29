# Example of Angular Service worker configuration

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Service worker

Service worker is a script that runs in the web browser and manages caching for an application. Service workers function as a network proxy. They intercept all outgoing HTTP requests made by the application and can choose how to respond to them.

To set up the Angular service worker in this project, was use the CLI command `ng add @angular/pwa`.

Source: https://angular.io/api/service-worker and https://angular.io/guide/service-worker-intro

## Data requests

The application calls to three API endpoints from the [Random Data Generator](https://random-data-api.com/):

 * *Name* from [/api/name/random_name](https://random-data-api.com/api/name/random_name) (no configured)
 * *Vehicle* from [/api/vehicle/random_vehicle](https://random-data-api.com/api/vehicle/random_vehicle) (freshness strategy)
 * *Food* from [/api/food/random_food](https://random-data-api.com/api/food/random_food) (performance strategy)
 
 ## Configuration
 
 The [`ngsw-config.json`](https://github.com/cichy380/example-ngsw-config/blob/main/ngsw-config.json) configuration file specifies eg. which data URLs the Angular service worker should cache and how it should update the data.
 
#### `dataGroups`

 The configuration file uses the JSON format.

```json
{
  "dataGroups": [
    {
      "name": "api-freshness",
      "urls": [
        "https://random-data-api.com/api/vehicle/random_vehicle"
      ],
      "cacheConfig": {
        "strategy": "freshness",
        "maxSize": 100,
        "maxAge": "5m",
        "timeout": "1s"
      }
    },
    {
      "name": "api-performance",
      "urls": [
        "https://random-data-api.com/api/food/random_food"
      ],
      "cacheConfig": {
        "strategy": "performance",
        "maxSize": 100,
        "maxAge": "5m"
      }
    }
  ]
}
```
