Template.body.helpers({
  items: function () {
    // get all the items from the db and populate our UI
    return Products.find();
  }
});

Template.item.events({
  'click .item-single': function (event) {

    // prevent the default behavior
    event.preventDefault();

    // record the click.
    var dataId = $(event.currentTarget).children('a').data('id');
      console.log(dataId);
    var item = Products.findOne({itemId : dataId});
      console.log(item);
    var action = {};
    action['clicks'] = 1;

    Products.update(
        {_id: item._id},
        {$inc: action}
    );
  }
});
