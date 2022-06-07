<h1 align="center">
Pyxies Report - PCC (Front)
</h1>

## Techs

- [x] React.js
- [x] Styled Components
- [x] TypeScript

## Starting Dev Environment

1. Run `npm install` or `yarn install`.<br />
2. Run `yarn start` and access `http://localhost:3000`.<br />

<br />

<h1 align="center">
Pyxies Report - PCC (Back)
</h1>

## Techs

- [x] Node Js
- [x] TypeORM
- [x] PostgreSQl

## Database
1. Run `npm install` or `yarn install`.<br />
2. Create env file in backend root.<br />
3. Run `docker run --name database -p 5431:5432 -e POSTGRES_PASSWORD=1234 postgres
`.<br />
4. Run `docker start database`.<br />
5. Go to any sql editor, make the connection and create the database on your machine.<br />
6. In the backend run `yarn typeorm migration:run`.<br />
7. Run `yarn run dev` and test in `http://localhost:3001`
