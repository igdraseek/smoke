/**
 * Run this when the meteor app is started
 */
Meteor.startup(function() {

    // Set up the data base by creating the initial empty records.
    if (Products.find().count() == 0) {
        var items = [
            {
                itemId: 'dress1',
                desc: 'Dress 1',
                category: 'normal',
                imgUrl: 'images/dress.jpeg',
                clicks: 0
            },
            {
                itemId: 'dress2',
                desc: 'Dress 2',
                category: 'normal',
                imgUrl: 'images/dress.jpeg',
                clicks: 0
            },
            {
                itemId: 'dress3',
                desc: 'Dress 3',
                category: 'local',
                imgUrl: 'images/dress.jpeg',
                clicks: 0
            },
            {
                itemId: 'dress4',
                desc: 'Dress 4',
                category: 'local',
                imgUrl: 'images/dress.jpeg',
                clicks: 0
            }
        ];

        // Loop over each record and insert into database
        _.each(items, function(item) {
            Products.insert(item);
        });
    }
});