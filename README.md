# To run it on your local terminal. Then go to localhost:3000 to see the page
meteor run --settings settings.json

# To deploy it to meteor.com.
meteor deploy --settings settings.json http://igdra.meteor.com/

# If you change the data in the database (change either collection/collect.js or server/bootstrap.js),
# then add --delete to the deploy command to delete the project. Then run deploy again without the delete option.
meteor deploy --settings settings.json http://igdra.meteor.com/ --delete

# TODO(luping): instruction on how to modify the DB on the server, without deleting the whole table.
