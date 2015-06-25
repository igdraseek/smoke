/**
 * Run this when the meteor app is started
 */
Meteor.startup(function() {

    // Set up the data base by creating the initial empty records.
    if (GlassesA.find().count() == 0) {
        var glassesA = [
            {
                itemId: 'gla_a1',
                title: 'Ray-Ban RB 3025 Aviator Sunglasses',
                category: ['normal', 'normal'],
                imgUrl: 'images/gla1.jpg',
                desc: [
                    "Black Metal Frame",
                    "Green Polarized Lens",
                    "Imported",
                    "UV Protection Coating",
                    "Lens Width 58mm"
                ],
                priceBefore: 200,
                priceAfter: 117
            },
            {
                itemId: 'gla_a2',
                title: 'Ray-Ban RB 3447 Round Sunglasses',
                category: ['normal', 'normal'],
                imgUrl: 'images/gla2.jpg',
                desc: [
                    "Gunmetal Metal Frame",
                    "Green G-15 XLT Lens",
                    "Made in the US (edited)",
                    "100% UV Protection",
                    "Lens Width 50mm"
                ],
                priceBefore: 150,
                priceAfter: 90
            },
            {
                itemId: 'gla_a3',
                title: 'Ray-Ban RB 2132 New Wayfarer Sunglasses',
                category: ['normal', 'normal'],
                imgUrl: 'images/gla3.jpg',
                desc: [
                    "Tortoise Acetate Frame",
                    "Crystal G-15 XLT Lens",
                    "Non-polarized",
                    "100% UV400 Protection Coating",
                    "Imported",
                    "Lens width 55mm"
                ],
                priceBefore: 130,
                priceAfter: 82
            },
            {
                itemId: 'gla_a4',
                title: 'Ray-Ban RB 3025 Arista',
                category: ['normal', 'normal'],
                imgUrl: 'images/gla4.jpg',
                desc: [
                    "Arista Gold Metal Frame",
                    "G-15 XLT Lens",
                    "Non-polarized",
                    "100% UV protection coating",
                    "Lens width 55mm",
                    "Made in the US"
                ],
                priceBefore: 158,
                priceAfter: 98
            },
            {
                itemId: 'gla_a5',
                title: 'Ray-Ban RB 3016 Classic Clubmaster',
                category: ['normal', 'normal'],
                imgUrl: 'images/gla5.jpg',
                desc: [
                    "Tortoise/Arista Frame",
                    "Crystal Green Lens",
                    "Imported",
                    "Non-Polarized",
                    "100% UV protection coating",
                    "Lens Width 51mm"
                ],
                priceBefore: 150,
                priceAfter: 89
            },
            {
                itemId: 'gla_a6',
                title: 'Ray-Ban RB 3183 Sunglasses 63 mm',
                category: ['normal', 'normal'],
                imgUrl: 'images/gla6.jpg',
                desc: [
                    "Gun Metal Frame",
                    "Green solid lens",
                    "Imported",
                    "Non-polarized lens",
                    "100% UV protection coating",
                    "Lens width 63mm"
                ],
                priceBefore: 130,
                priceAfter: 84
            },
            {
                itemId: 'gla_a7',
                title: 'Ray-Ban RB 3386 Aviator Sunglasses',
                category: ['normal', 'normal'],
                imgUrl: 'images/gla7.jpg',
                desc: [
                    "Gold metal frame",
                    "Imported",
                    "Non-polarized lens",
                    "Lens: Polycarbonate",
                    "Lens: 63mm / Bridge: 13mm / Arm: 130",
                ],
                priceBefore: 195,
                priceAfter: 103
            },
            {
                itemId: 'gla_a8',
                title: 'Ray-Ban RB 4207 Sunglasses',
                category: ['normal', 'normal'],
                imgUrl: 'images/gla8.jpg',
                desc: [
                    "Imported",
                    "Plastic frame",
                    "Plastic lens, non-polarized",
                    "100% UV protection coating",
                    "Lens width: 55.4 mm",
                    "Lens height: 41.2 mm"
                ],
                priceBefore: 195,
                priceAfter: 116
            },
            {
                itemId: 'gla_a9',
                title: 'Ray-Ban RB 2180 Sunglasses',
                category: ['normal', 'normal'],
                imgUrl: 'images/gla9.jpg',
                desc: [
                    "Made in US",
                    "Plastic frame, Non-polarized",
                    "Glasses lens",
                    "100% UV protection coating",
                    "Lens width: 50 mm",
                    "Lens height: 45 mm"
                ],
                priceBefore: 150,
                priceAfter: 106
            }
        ];

        // Loop over each record and insert into database
        _.each(glassesA, function(gla) {
            GlassesA.insert(gla);
        });
    }

    if (GlassesB.find().count() == 0) {
        var glassesB = [
            {
                itemId: 'gla_b1',
                title: 'Ray-Ban RB 3025 Aviator Sunglasses',
                category: ['normal', 'normal'],
                imgUrl: 'images/gla1.jpg',
                desc: [
                    "Black Metal Frame",
                    "Green Polarized Lens",
                    "Imported",
                    "UV Protection Coating",
                    "Lens Width 58mm"
                ],
                priceBefore: 200,
                priceAfter: 117
            },
            {
                itemId: 'gla_b2',
                title: 'Ray-Ban RB 3447 Round Sunglasses',
                category: ['local', 'normal'],
                imgUrl: 'images/gla2.jpg',
                desc: [
                    "Gunmetal Metal Frame",
                    "Green G-15 XLT Lens",
                    "Made in the US (edited)",
                    "100% UV Protection",
                    "Lens Width 50mm"
                ],
                priceBefore: 150,
                priceAfter: 90
            },
            {
                itemId: 'gla_b3',
                title: 'Ray-Ban RB 2132 New Wayfarer Sunglasses',
                category: ['women', 'normal'],
                imgUrl: 'images/gla3.jpg',
                desc: [
                    "Tortoise Acetate Frame",
                    "Crystal G-15 XLT Lens",
                    "Non-polarized",
                    "100% UV400 Protection Coating",
                    "Imported",
                    "Lens width 55mm"
                ],
                priceBefore: 130,
                priceAfter: 82
            },
            {
                itemId: 'gla_b4',
                title: 'Ray-Ban RB 3025 Arista',
                category: ['sustainable', "normal"],
                imgUrl: 'images/gla4.jpg',
                desc: [
                    "Arista Gold Metal Frame",
                    "G-15 XLT Lens",
                    "Non-polarized",
                    "100% UV protection coating",
                    "Lens width 55mm",
                    "Made in the US"
                ],
                priceBefore: 158,
                priceAfter: 98
            },
            {
                itemId: 'gla_b5',
                title: 'Ray-Ban RB 3016 Classic Clubmaster',
                category: ['hub', 'normal'],
                imgUrl: 'images/gla5.jpg',
                desc: [
                    "Tortoise/Arista Frame",
                    "Crystal Green Lens",
                    "Imported",
                    "Non-Polarized",
                    "100% UV protection coating",
                    "Lens Width 51mm"
                ],
                priceBefore: 150,
                priceAfter: 89
            },
            {
                itemId: 'gla_b6',
                title: 'Ray-Ban RB 3183 Sunglasses 63 mm',
                category: ['normal', 'normal'],
                imgUrl: 'images/gla6.jpg',
                desc: [
                    "Gun Metal Frame",
                    "Green solid lens",
                    "Imported",
                    "Non-polarized Lens",
                    "100% UV protection coating",
                    "Lens Width 63mm"
                ],
                priceBefore: 130,
                priceAfter: 84
            },
            {
                itemId: 'gla_b7',
                title: 'Ray-Ban RB 3386 Aviator Sunglasses',
                category: ['normal', 'normal'],
                imgUrl: 'images/gla7.jpg',
                desc: [
                    "Gold Metal Frame",
                    "Imported",
                    "Non polarized Lens",
                    "Lens: Polycarbonate",
                    "Lens: 63mm / Bridge: 13mm / Arm: 130",
                ],
                priceBefore: 195,
                priceAfter: 103
            },
            {
                itemId: 'gla_b8',
                title: 'Ray-Ban RB 4207 Sunglasses',
                category: ['women', 'local'],
                imgUrl: 'images/gla8.jpg',
                desc: [
                    "Imported",
                    "Plastic frame",
                    "Plastic lens, Non-Polarized",
                    "100% UV protection coating",
                    "Lens width: 55.4 mm",
                    "Lens height: 41.2 mm"
                ],
                priceBefore: 195,
                priceAfter: 116
            },
            {
                itemId: 'gla_b9',
                title: 'Ray-Ban RB 2180 Sunglasses',
                category: ['women', 'sustainable'],
                imgUrl: 'images/gla9.jpg',
                desc: [
                    "Made in US",
                    "Plastic frame",
                    "Glasses lens, Non-Polarized",
                    "100% UV protection coating",
                    "Lens width: 50 mm",
                    "Lens height: 45 mm"
                ],
                priceBefore: 150,
                priceAfter: 106
            }
        ];

        // Loop over each record and insert into database
        _.each(glassesB, function (gla) {
            GlassesB.insert(gla);
        });
    }

    if (GlassesC.find().count() == 0) {
        var glassesC = [
            {
                itemId: 'gla_c1',
                title: 'Ray-Ban RB 3025 Aviator Sunglasses',
                category: ['normal', 'normal'],
                imgUrl: 'images/gla1.jpg',
                desc: [
                    "Black Metal Frame",
                    "Green Polarized Lens",
                    "Imported",
                    "UV Protection Coating",
                    "Lens Width 58mm"
                ],
                priceBefore: 200,
                priceAfter: 117
            },
            {
                itemId: 'gla_c2',
                title: 'Ray-Ban RB 3447 Round Sunglasses',
                category: ['local', 'normal'],
                imgUrl: 'images/gla2.jpg',
                desc: [
                    "Gunmetal Metal Frame",
                    "Green G-15 XLT Lens",
                    "Made in the US (edited)",
                    "100% UV Protection",
                    "Lens Width 50mm"
                ],
                priceBefore: 150,
                priceAfter: 100
            },
            {
                itemId: 'gla_c3',
                title: 'Ray-Ban RB 2132 New Wayfarer Sunglasses',
                category: ['women', 'normal'],
                imgUrl: 'images/gla3.jpg',
                desc: [
                    "Tortoise Acetate Frame",
                    "Crystal G-15 XLT Lens",
                    "Non-polarized",
                    "100% UV400 Protection Coating",
                    "Imported",
                    "Lens width 55mm"
                ],
                priceBefore: 130,
                priceAfter: 90
            },
            {
                itemId: 'gla_c4',
                title: 'Ray-Ban RB 3025 Arista',
                category: ['sustainable', "normal"],
                imgUrl: 'images/gla4.jpg',
                desc: [
                    "Arista Gold Metal Frame",
                    "G-15 XLT Lens",
                    "Non-polarized",
                    "100% UV protection coating",
                    "Lens width 55mm",
                    "Made in the US"
                ],
                priceBefore: 158,
                priceAfter: 112
            },
            {
                itemId: 'gla_c5',
                title: 'Ray-Ban RB 3016 Classic Clubmaster',
                category: ['hub', 'normal'],
                imgUrl: 'images/gla5.jpg',
                desc: [
                    "Tortoise/Arista Frame",
                    "Crystal Green Lens",
                    "Imported",
                    "Non-Polarized",
                    "100% UV protection coating",
                    "Lens Width 51mm"
                ],
                priceBefore: 150,
                priceAfter: 102
            },
            {
                itemId: 'gla_c6',
                title: 'Ray-Ban RB 3183 Sunglasses 63 mm',
                category: ['normal', 'normal'],
                imgUrl: 'images/gla6.jpg',
                desc: [
                    "Gun Metal Frame",
                    "Green solid lens",
                    "Imported",
                    "Non-polarized Lens",
                    "100% UV protection coating",
                    "Lens Width 63mm"
                ],
                priceBefore: 130,
                priceAfter: 84
            },
            {
                itemId: 'gla_c7',
                title: 'Ray-Ban RB 3386 Aviator Sunglasses',
                category: ['normal', 'normal'],
                imgUrl: 'images/gla7.jpg',
                desc: [
                    "Gold Metal Frame",
                    "Imported",
                    "Non polarized Lens",
                    "Lens: Polycarbonate",
                    "Lens: 63mm / Bridge: 13mm / Arm: 130",
                ],
                priceBefore: 195,
                priceAfter: 103
            },
            {
                itemId: 'gla_c8',
                title: 'Ray-Ban RB 4207 Sunglasses',
                category: ['women', 'local'],
                imgUrl: 'images/gla8.jpg',
                desc: [
                    "Imported",
                    "Plastic frame",
                    "Plastic lens, Non-Polarized",
                    "100% UV protection coating",
                    "Lens width: 55.4 mm",
                    "Lens height: 41.2 mm"
                ],
                priceBefore: 195,
                priceAfter: 139
            },
            {
                itemId: 'gla_c9',
                title: 'Ray-Ban RB 2180 Sunglasses',
                category: ['women', 'sustainable'],
                imgUrl: 'images/gla9.jpg',
                desc: [
                    "Made in US",
                    "Plastic frame",
                    "Glasses lens, Non-Polarized",
                    "100% UV protection coating",
                    "Lens width: 50 mm",
                    "Lens height: 45 mm"
                ],
                priceBefore: 150,
                priceAfter: 127
            }
        ];

        // Loop over each record and insert into database
        _.each(glassesC, function (gla) {
            GlassesC.insert(gla);
        });
    }

    if (BagsA.find().count() == 0) {
        var bagsA = [
            {
                itemId: 'bag_a1',
                title: 'Kate Spade Belle Place Straw Shoulder Bag',
                category: ['normal', 'normal'],
                imgUrl: 'images/bag1.jpg',
                desc: [
                    "Natural/Geranium",
                    "Double top handles, 9\" drop",
                    "14k goldplated hardware",
                    "Interior zip, open pockets",
                    '15"W X 11.5"H X 6"D',
                    'Straw/leather',
                ],
                priceBefore: 248,
                priceAfter: 173
            },
            {
                itemId: 'bag_a2',
                title: 'Kate Spade hawthorne lane Tote',
                category: ['normal', 'normal'],
                imgUrl: 'images/bag2.jpg',
                desc: [
                    "Blue multi, deco beige/black",
                    "Lobster-clasp tab closure",
                    "Interior zip, wall and cell-phone pockets",
                    "PVC"
                ],
                priceBefore: 288,
                priceAfter: 198
            },
            {
                itemId: 'bag_a3',
                title: 'Kate Spade Hawthorne Lane Ryan Tote',
                category: ['normal', 'normal'],
                imgUrl: 'images/bag3.jpg',
                desc: [
                    "Sweetheart Pink/Cream",
                    'Size:13.7 X 13.1 X 3.9',
                    'Open top and dog clip closure',
                    'Interior zip and double slide pockets',
                    'Light gold spade stud'
                ],
                priceBefore: 198,
                priceAfter: 138
            },
            {
                itemId: 'bag_a4',
                title: 'Kate Spade Bay Drive Summer Woven Tote',
                category: ['normal', 'normal'],
                imgUrl: 'images/bag4.jpg',
                desc: [
                    'Black/White',
                    'Dangling charm and logo plaque',
                    'Open top with clip closureInterior zip',
                    'Wall and smartphone pockets',
                    'Protective metal feet',
                    'Polyurethane/polyester'
                ],
                priceBefore: 348,
                priceAfter: 196
            },
            {
                itemId: 'bag_a5',
                title: 'Kate Spade Classic Nylon Catie Tote',
                category: ['normal', 'normal'],
                imgUrl: 'images/bag5.jpg',
                desc: [
                    "Lucky Green Multi",
                    "Magnetic snap closure",
                    "Dual top handles",
                    "Gold-tone brand name hardware",
                    "Imported"
                ],
                priceBefore: 298,
                priceAfter: 178
            },
            {
                itemId: 'bag_a6',
                title: 'Kate Spade Karen Brown Animal Print Satchel',
                category: ['normal', 'normal'],
                imgUrl: 'images/bag6.jpg',
                desc: [
                    "Type:Satchels",
                    "Measurements:12 x 9 x 6",
                    "Color:Brown Animal Print",
                    "Fabric:Nylon",
                    "6\" handle drop"
                ],
                priceBefore: 288,
                priceAfter: 166
            }
        ];

        // Loop over each record and insert into database
        _.each(bagsA, function(bag) {
            BagsA.insert(bag);
        });
    }

    if (BagsB.find().count() == 0) {
        var bagsB = [
            {
                itemId: 'bag_b1',
                title: 'Kate Spade Belle Place Straw Shoulder Bag',
                category: ['normal', 'normal'],
                imgUrl: 'images/bag1.jpg',
                desc: [
                    "Natural/Geranium",
                    "Double top handles, 9\" drop",
                    "14k goldplated hardware",
                    "Interior zip, open pockets",
                    '15"W X 11.5"H X 6"D',
                    'Straw/leather',
                ],
                priceBefore: 248,
                priceAfter: 173
            },
            {
                itemId: 'bag_b2',
                title: 'Kate Spade hawthorne lane Tote',
                category: ['women', 'normal'],
                imgUrl: 'images/bag2.jpg',
                desc: [
                    "Blue multi, deco beige/black",
                    "Lobster-clasp tab closure",
                    "Interior zip, wall and cell-phone pockets",
                    "PVC"
                ],
                priceBefore: 288,
                priceAfter: 198
            },
            {
                itemId: 'bag_a3',
                title: 'Kate Spade Hawthorne Lane Ryan Tote',
                category: ['local', 'normal'],
                imgUrl: 'images/bag3.jpg',
                desc: [
                    "Sweetheart Pink/Cream",
                    'Size:13.7 X 13.1 X 3.9',
                    'Open top and dog clip closure',
                    'Interior zip and double slide pockets',
                    'Light gold spade stud'
                ],
                priceBefore: 198,
                priceAfter: 138
            },
            {
                itemId: 'bag_a4',
                title: 'Kate Spade Bay Drive Summer Woven Tote',
                category: ['normal', 'normal'],
                imgUrl: 'images/bag4.jpg',
                desc: [
                    'Black/White',
                    'Dangling charm and logo plaque',
                    'Open top with clip closureInterior zip',
                    'Wall and smartphone pockets',
                    'Protective metal feet',
                    'Polyurethane/polyester'
                ],
                priceBefore: 348,
                priceAfter: 196
            },
            {
                itemId: 'bag_a5',
                title: 'Kate Spade Classic Nylon Catie Tote',
                category: ['sustainable', 'normal'],
                imgUrl: 'images/bag5.jpg',
                desc: [
                    "Lucky Green Multi",
                    "Magnetic snap closure",
                    "Dual top handles",
                    "Gold-tone brand name hardware",
                    "Imported"
                ],
                priceBefore: 298,
                priceAfter: 178
            },
            {
                itemId: 'bag_a6',
                title: 'Kate Spade Karen Brown Animal Print Satchel',
                category: ['hub', 'normal'],
                imgUrl: 'images/bag6.jpg',
                desc: [
                    "Type:Satchels",
                    "Measurements:12 x 9 x 6",
                    "Color:Brown Animal Print",
                    "Fabric:Nylon",
                    "6\" handle drop"
                ],
                priceBefore: 288,
                priceAfter: 166
            }
        ];

        // Loop over each record and insert into database
        _.each(bagsB, function(bag) {
            BagsB.insert(bag);
        });
    }

    if (BagsC.find().count() == 0) {
        var bagsC = [
            {
                itemId: 'bag_c1',
                title: 'Kate Spade Belle Place Straw Shoulder Bag',
                category: ['normal', 'normal'],
                imgUrl: 'images/bag1.jpg',
                desc: [
                    "Natural/Geranium",
                    "Double top handles, 9\" drop",
                    "14k goldplated hardware",
                    "Interior zip, open pockets",
                    '15"W X 11.5"H X 6"D',
                    'Straw/leather',
                ],
                priceBefore: 248,
                priceAfter: 173
            },
            {
                itemId: 'bag_c2',
                title: 'Kate Spade hawthorne lane Tote',
                category: ['women', 'normal'],
                imgUrl: 'images/bag2.jpg',
                desc: [
                    "Blue multi, deco beige/black",
                    "Lobster-clasp tab closure",
                    "Interior zip, wall and cell-phone pockets",
                    "PVC"
                ],
                priceBefore: 288,
                priceAfter: 218
            },
            {
                itemId: 'bag_c3',
                title: 'Kate Spade Hawthorne Lane Ryan Tote',
                category: ['local', 'normal'],
                imgUrl: 'images/bag3.jpg',
                desc: [
                    "Sweetheart Pink/Cream",
                    'Size:13.7 X 13.1 X 3.9',
                    'Open top and dog clip closure',
                    'Interior zip and double slide pockets',
                    'Light gold spade stud'
                ],
                priceBefore: 198,
                priceAfter: 152
            },
            {
                itemId: 'bag_c4',
                title: 'Kate Spade Bay Drive Summer Woven Tote',
                category: ['normal', 'normal'],
                imgUrl: 'images/bag4.jpg',
                desc: [
                    'Black/White',
                    'Dangling charm and logo plaque',
                    'Open top with clip closureInterior zip',
                    'Wall and smartphone pockets',
                    'Protective metal feet',
                    'Polyurethane/polyester'
                ],
                priceBefore: 348,
                priceAfter: 196
            },
            {
                itemId: 'bag_c5',
                title: 'Kate Spade Classic Nylon Catie Tote',
                category: ['sustainable', 'normal'],
                imgUrl: 'images/bag5.jpg',
                desc: [
                    "Lucky Green Multi",
                    "Magnetic snap closure",
                    "Dual top handles",
                    "Gold-tone brand name hardware",
                    "Imported"
                ],
                priceBefore: 298,
                priceAfter: 204
            },
            {
                itemId: 'bag_c6',
                title: 'Kate Spade Karen Brown Animal Print Satchel',
                category: ['hub', 'normal'],
                imgUrl: 'images/bag6.jpg',
                desc: [
                    "Type:Satchels",
                    "Measurements:12 x 9 x 6",
                    "Color:Brown Animal Print",
                    "Fabric:Nylon",
                    "6\" handle drop"
                ],
                priceBefore: 288,
                priceAfter: 190
            }
        ];

        // Loop over each record and insert into database
        _.each(bagsC, function(bag) {
            BagsC.insert(bag);
        });
    }
});