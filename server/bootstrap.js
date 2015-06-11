/**
 * Run this when the meteor app is started
 */
Meteor.startup(function() {

    // Set up the data base by creating the initial empty records.
    if (Glasses.find().count() == 0) {
        var glasses = [
            {
                itemId: 'gla_normal1',
                desc: 'Ray-Ban Aviators RB3025 58mm Black Frame/Green Polarized Lens',
                category: 'normal',
                label: '',
                imgUrl: 'images/gla1.jpeg',
                priceBefore: 200,
                priceAfter: 117
            },
            {
                itemId: 'gla_normal2',
                desc: 'Ray-Ban RB3447 029 Round Metal 50mm Gunmetal Frame/Green Lens',
                category: 'normal',
                label: '',
                imgUrl: 'images/gla2.jpeg',
                priceBefore: 150,
                priceAfter: 90
            },
            {
                itemId: 'gla_normal3',
                desc: 'Ray-Ban RB2132 New Wayfarer 55mm Black Frame/G-15XLT Polarized Lens',
                category: 'normal1',
                label: '',
                imgUrl: 'images/gla3.jpeg',
                priceBefore: 180,
                priceAfter: 126
            },
            {
                itemId: 'gla_normal4',
                desc: 'Ray-Ban Aviators RB3025 58mm Arista Gold Frame/G-15XLT Polarized Lens ',
                category: 'normal1',
                label: '',
                imgUrl: 'images/gla4.jpeg',
                priceBefore: 200,
                priceAfter: 117
            },
            {
                itemId: 'gla_local',
                desc: 'Ray-Ban RB2132 New Wayfarer 55mm Black Frame/G-15XLT Polarized Lens',
                category: 'local',
                label: 'Sold by: Local Business Based on Your Location',
                imgUrl: 'images/gla3.jpeg',
                priceBefore: 180,
                priceAfter: 126
            },
            {
                itemId: 'gla_women',
                desc: 'Ray-Ban Aviators RB3025 58mm Arista Gold Frame/G-15XLT Polarized Lens ',
                category: 'women',
                label: 'Sold by: Women Owned Business',
                imgUrl: 'images/gla4.jpeg',
                priceBefore: 200,
                priceAfter: 117
            },
            {
                itemId: 'gla_sustainable',
                desc: 'Ray-Ban RB2132 New Wayfarer 55mm Black Frame/G-15XLT Polarized Lens',
                category: 'sustainable',
                label: 'Sold by: Certified Sustainable Business',
                imgUrl: 'images/gla3.jpeg',
                priceBefore: 180,
                priceAfter: 126
            },
            {
                itemId: 'gla_bub',
                desc: 'Ray-Ban Aviators RB3025 58mm Arista Gold Frame/G-15XLT Polarized Lens ',
                category: 'hub',
                label: 'Sold by: Business in Historically Low Income Neighborhood',
                imgUrl: 'images/gla4.jpeg',
                priceBefore: 200,
                priceAfter: 118
            },
            {
                itemId: 'gla_local_higher_price',
                desc: 'Ray-Ban RB2132 New Wayfarer 55mm Black Frame/G-15XLT Polarized Lens',
                category: 'local_higher_price',
                label: 'Sold by: Local Business Based on Your Location',
                imgUrl: 'images/gla3.jpeg',
                priceBefore: 180,
                priceAfter: 138
            },
            {
                itemId: 'gla_women_higher_price',
                desc: 'Ray-Ban Aviators RB3025 58mm Arista Gold Frame/G-15XLT Polarized Lens ',
                category: 'women_higher_price',
                label: 'Sold by: Women Owned Business',
                imgUrl: 'images/gla4.jpeg',
                priceBefore: 200,
                priceAfter: 128
            }
        ];

        // Loop over each record and insert into database
        _.each(glasses, function(gla) {
            Glasses.insert(gla);
        });
    }

    if (Bags.find().count() == 0) {
        var bags = [
            {
                itemId: 'bag_normal1',
                desc: 'Kate Spade Belle Place Straw Shoulder Bag Natural/Geranium',
                category: 'normal',
                label: '',
                imgUrl: 'images/bag1.jpeg',
                priceBefore: 248,
                priceAfter: 186
            },
            {
                itemId: 'bag_normal2',
                desc: 'Kate Spade Lillian Court Medium Harmony Shoulder Bag Bright White',
                category: 'normal',
                label: '',
                imgUrl: 'images/bag2.jpeg',
                priceBefore: 318,
                priceAfter: 298
            },
            {
                itemId: 'bag_normal3',
                desc: 'Kate Spade Belle Place Straw Small Maise Natural/Black',
                category: 'normal1',
                label: '',
                imgUrl: 'images/bag3.jpeg',
                priceBefore: 268,
                priceAfter: 248
            },
            {
                itemId: 'bag_normal4',
                desc: 'Kate Spade Bay Drive Summer Plaid Woven Tote Black/White',
                category: 'normal1',
                label: '',
                imgUrl: 'images/bag4.jpeg',
                priceBefore: 348,
                priceAfter: 328
            },
            {
                itemId: 'bag_local',
                desc: 'Kate Spade Belle Place Straw Small Maise Natural/Black',
                category: 'local',
                label: 'Sold by: Local Business Based on Your Location',
                imgUrl: 'images/bag3.jpeg',
                priceBefore: 268,
                priceAfter: 248
            },
            {
                itemId: 'bag_women',
                desc: 'Kate Spade Bay Drive Summer Plaid Woven Tote Black/White',
                category: 'women',
                label: 'Sold by: Women Owned Business',
                imgUrl: 'images/bag4.jpeg',
                priceBefore: 348,
                priceAfter: 328
            },
            {
                itemId: 'bag_sustainable',
                desc: 'Kate Spade Belle Place Straw Small Maise Natural/Black',
                category: 'sustainable',
                label: 'Sold by: Certified Sustainable Business',
                imgUrl: 'images/bag3.jpeg',
                priceBefore: 268,
                priceAfter: 248
            },
            {
                itemId: 'bag_hub',
                desc: 'Kate Spade Bay Drive Summer Plaid Woven Tote Black/White',
                category: 'hub',
                label: 'Sold by: Business in Historically Low Income Neighborhood',
                imgUrl: 'images/bag4.jpeg',
                priceBefore: 348,
                priceAfter: 328
            },
            {
                itemId: 'bag_local_higher_price',
                desc: 'Kate Spade Belle Place Straw Small Maise Natural/Black',
                category: 'local_higher_price',
                label: 'Sold by: Local Business Based on Your Location',
                imgUrl: 'images/bag3.jpeg',
                priceBefore: 268,
                priceAfter: 258
            },
            {
                itemId: 'bag_women_higher_price',
                desc: 'Kate Spade Bay Drive Summer Plaid Woven Tote Black/White',
                category: 'women_higher_price',
                label: 'Sold by: Women Owned Business',
                imgUrl: 'images/bag4.jpeg',
                priceBefore: 348,
                priceAfter: 338
            }
        ];

        // Loop over each record and insert into database
        _.each(bags, function(bag) {
            Bags.insert(bag);
        });
    }
});