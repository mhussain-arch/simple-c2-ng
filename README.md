# Simple C2

Created in Angular v19 and used PrimeNG for their UI components.

## Pre-requisites

```bash
$ npm i # Install packages
```
Create a folder inside the `app` directory called `environment` and inside it create a file called `environment.ts`

```typescript
// environment/environment.ts
export const environment = {
    apiUrl: "http://localhost:3000";
}
```

Start the frontend.
```
npm start
```
then head over to `http://localhost:4200`
