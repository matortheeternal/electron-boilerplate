describe('Hello World service', function() {
	beforeEach(module('application'));
	
	var helloService;
	
	beforeEach(function() {
		inject(function($injector) {
			helloService = $injector.get('helloService');
		})
	});
	
	it('should return "Hello world!"', function() {
		expect(helloService.world()).toEqual('Hello World!');
	});
});