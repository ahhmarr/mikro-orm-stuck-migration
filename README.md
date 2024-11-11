## Repo to reproduce migration taking too long to finish issue

### How to reproduce

- run `npm install`
- run `npm run migrate:db:create`
   - this will generates the file bit still the execution will finish like after 70-80seconds
- Same behavior can be reproduced by running `npx mikro-orm migration:create` as well 
