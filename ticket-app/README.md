# Tikect React Js with Socket IO

This Project standard app tickets in real time

## Available Scripts

In the project directory, you can run:

```bash
yarn start
yarn build
```

or

```bash
npm start
npm run build
```
In archive .env this URL_HOST_SERVER :

```dotenv
REACT_APP_HOST = http://localhost:8080/
```

In archive ./src/helpers/getLast.js the url of the Api Rest in the last entries 

```javascript
    const resp = await  fetch('http://localhost:8080/last-tickets');
    const data = resp.json();
    return data;
```
