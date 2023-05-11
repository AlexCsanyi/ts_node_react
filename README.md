# ts_node_react

A TypeScript Node/React app

## How to set up

1. clone (the repo)[Type 'ReactNode' is not assignable to type 'Element'.]
2. open the project with a code editor
3. first set up the client; in the terminal `cd ./client`
4. next run `npm i`
5. next create the client module's .env file `touch .env`
6. open the client's .env file `code .env` and add

```
VITE_SECRET_API_KEY=mysecrettoken
VITE_API_URL=http://localhost:7000
```

7. next `npm run build`
8. now set up the server; `cd ../server`
9. run `npm i`
10. next create the server's .env file `touch .env`
11. open the server's .env file `code .env`
12. add the following code:

```
PORT=7000
SECRET_API_KEY=mysecrettoken
```

13. `npm run start`
14. navigate to `http://localhost:7000`
