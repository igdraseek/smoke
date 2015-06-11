Iron.utils.debug = true;

Router.configure({
  trackPageView: true
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/bags', {
  contentExperiment: {
    id: "ID:qcz0wO1NREWhR35otaangw",
    variationTemplates: ["BagA", "BagB", "BagC"]
  }
});

Router.route('/glasses', {
  contentExperiment: {
    id: "_S-BrMpVQCuykoAI__-IyA",
    variationTemplates: ["GlaA", "GlaB", "GlaC"]
  }
});

Router.route('/thank', function () {
      this.render('ThankYou');
});

/* Following is just for testing different pages directly. */
Router.route('/TestBagA', function () {
  this.render('BagA');
});
Router.route('/TestBagB', function () {
  this.render('BagB');
});
Router.route('/TestBagC', function () {
  this.render('BagC');
});
Router.route('/TestGlaA', function () {
  this.render('GlaA');
});
Router.route('/TestGlaB', function () {
  this.render('GlaB');
});
Router.route('/TestGlaC', function () {
  this.render('GlaC');
});

Template.BagA.helpers({
  items: function () {
    return BagsA.find();
  }
});

Template.BagB.helpers({
  items: function () {
    return BagsB.find();
  }
});

Template.BagC.helpers({
  items: function () {
    return BagsC.find();
  }
});

Template.GlaA.helpers({
  items: function () {
    return GlassesA.find();
  }
});

Template.GlaB.helpers({
  items: function () {
    return GlassesB.find();
  }
});

Template.GlaC.helpers({
  items: function () {
    return GlassesC.find();
  }
});

Template.ItemSingle.helpers({
  getLabel: function(className) {
    if (className == "women") {
      return "Owned by Women";
    }
    if (className == "local") {
      return "Local Based on Your Location"
    }
    if (className == "sustainable") {
      return "Certified Sustainable";
    }
    if (className == "hub") {
      return "In Low Income Neighborhood";
    }
    return "";
  }
});

Template.ItemSingleBag.helpers({
  getLabel: function(className) {
    if (className == "women") {
      return "Owned by Women";
    }
    if (className == "local") {
      return "Local Based on Your Location"
    }
    if (className == "sustainable") {
      return "Certified Sustainable";
    }
    if (className == "hub") {
      return "In Low Income Neighborhood";
    }
    return "";
  }
});

Template.ItemSingle.events({
  'click .cart': function (event) {

    // prevent the default behavior
    event.preventDefault();

    // record the click.
    var dataId = $(event.currentTarget).data('id');
    var category=$(event.currentTarget).data('category');
    console.log('click on buy button: ' + dataId + ' cat: ' + category);

    ga('send', 'event', dataId, 'click', category, 1);

    Router.go('/thank');
  }
});

Template.ItemSingleBag.events({
  'click .cart': function (event) {

    // prevent the default behavior
    event.preventDefault();

    // record the click.
    var dataId = $(event.currentTarget).data('id');
    var category=$(event.currentTarget).data('category');
    console.log('click on buy button: ' + dataId + ' cat: ' + category);

    ga('send', 'event', dataId, 'click', 'buy ' + category, 1);

    Router.go('/thank');
  }
});
