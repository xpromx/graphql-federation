## ToDo

- [x] Prisma DB
- [x] Jest Setup
- [x] Monorepo setup (turborepo)
- [ ] Husky
- [ ] Github Actions CI/CD
- [x] Create 2 graphs (tours, users)
- [x] Apollo Federation Setup
- [ ] Improve Test
- [ ] Authentication
- [ ] Authorization
- [ ] Monitoring

## Commands

- npx prisma migrate dev --name ${name}
- npx prisma db seed
- yarn generate
- yarn dev

## Apollo Studio

```
rover subgraph publish Federation-demo-cwgbak@current \
  --name tours --routing-url http://localhost:4002 \
  --schema ./apps/subgraph-tours/src/schema.graphql
```

```
rover subgraph publish Federation-demo-cwgbak@current \
  --name users --routing-url http://localhost:4003 \
  --schema ./apps/subgraph-users/src/schema.graphql
```
