npx ts-node ./node_modules/.bin/typeorm migration:generate -n create_listings_table -c development
npx ts-node ./node_modules/.bin/typeorm migration:run -c development
