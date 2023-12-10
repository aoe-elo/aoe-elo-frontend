# Search Index Service

one thing we need to figure out is a search api for us. i think there it makes sense, that we have a json like:

```json
index: {
  "TheViper": {
    type: "Player",
    link: "/players/29",
    id: 29
  },
  "Warlords II": {
    type: "Tournament",
    link: "/tournaments/631",
    id: 631
  },
  ...
}
``

- and there is a `SearchIndexService` that creates that every now and then and caches it
- we send the json to the frontend and cache it there as well and use it for autocompletion and live search
- when a client requests something, we send the id and type to the backend and it returns the object
- when a client wants to go to the page, we use the link and redirect to it  

## Implementation

- use https://www.fusejs.io/api/indexing.html
- use https://www.npmjs.com/package/cache-manager
- use https://www.npmjs.com/package/cache-manager-redis-store
