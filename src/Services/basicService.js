export default function(ngapp) {
	ngapp.service('helloService', function() {
		return {
			world: function() {
				return 'Hello World!';
			}
		};
	});
}