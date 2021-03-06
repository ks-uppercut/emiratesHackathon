Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/',{
	template: 'home'
});

Router.route('home',{
	template: 'home'
});

Router.route('smap',{
	template: 'smap'
});

Router.route('page2',{
	template: 'flights'
});

Router.route('page3',{
	template: 'flightsDetail'
});

Router.route('checkout',{
	template: 'checkout'
});

Router.route('populateXola', {
	template: 'populateXola'
});

Router.route('populateStub', {
	template: 'populateStub'
});

Router.route('bookFlight', {
	template: 'bookFlight'
});