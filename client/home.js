Iron.utils.debug = true;

Router.configure({
  trackPageView: true
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/bags', {
  contentExperiment: {
    id: "6wJpJ2UBSj2-L3YDJh1-CQ",
    variationTemplates: ["BagA", "BagB1", "BagB2", "BagB3"]
  }
});

Router.route('/glasses', {
  contentExperiment: {
    id: "XlCvS7p3SuiAPC1xHFTc1g",
    variationTemplates: ["GlaA", "GlaB1", "GlaB2", "GlaB3"]
  }
});

Router.route('/thank', function () {
      this.render('ThankYou');
});

/* Following is just for testing different pages directly. */
Router.route('/TestBagA', function () {
  this.render('BagA');
});
Router.route('/TestBagB1', function () {
  this.render('BagB1');
});
Router.route('/TestBagB2', function () {
  this.render('BagB2');
});
Router.route('/TestBagB3', function () {
  this.render('BagB3');
});
Router.route('/TestGlaA', function () {
  this.render('GlaA');
});
Router.route('/TestGlaB1', function () {
  this.render('GlaB1');
});
Router.route('/TestGlaB2', function () {
  this.render('GlaB2');
});
Router.route('/TestGlaB3', function () {
  this.render('GlaB3');
});

Template.BagA.helpers({
  items: function () {
    // get all the items from the db and populate our UI
    return Bags.find({category : {$in : ['normal', 'normal1']}});
  }
});

Template.BagB1.helpers({
  items: function () {
    // get all the items from the db and populate our UI
    return Bags.find({category : {$in : ['normal', 'local', 'women']}});
  }
});

Template.BagB2.helpers({
  items: function () {
    // get all the items from the db and populate our UI
    return Bags.find({category : {$in : ['normal', 'sustainable', 'hub']}});
  }
});

Template.BagB3.helpers({
  items: function () {
    // get all the items from the db and populate our UI
    return Bags.find({category : {$in : ['normal', 'local_higher_price', 'women_higher_price']}});
  }
});

Template.GlaA.helpers({
  items: function () {
    // get all the items from the db and populate our UI
    return Glasses.find({category : {$in : ['normal', 'normal1']}});
  }
});

Template.GlaB1.helpers({
  items: function () {
    // get all the items from the db and populate our UI
    return Glasses.find({category : {$in : ['normal', 'local', 'women']}});
  }
});

Template.GlaB2.helpers({
  items: function () {
    // get all the items from the db and populate our UI
    return Glasses.find({category : {$in : ['normal', 'sustainable', 'hub']}});
  }
});

Template.GlaB3.helpers({
  items: function () {
    // get all the items from the db and populate our UI
    return Glasses.find({category : {$in : ['normal', 'local_higher_price', 'women_higher_price']}});
  }
});

Template.ItemSingle.events({
  'click .cart': function (event) {

    // prevent the default behavior
    event.preventDefault();

    // record the click.
    var dataId = $(event.currentTarget).data('id');
    console.log('click on buy button: ' + dataId);

    ga('send', 'event', dataId, 'click', 'buy button', 1);

    Router.go('/thank');
  }
});
