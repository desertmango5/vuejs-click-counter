
var app = new Vue({
	el: '#app',
	data: {
		message: 'Number of times you have clicked the button: ',
		message2: undefined,
		number: 0
	},
	methods: {
		numClicks: function() {
			true ? app.number++ : false
			app.number >= 10 ? app.message2 = 'You should think about getting a life!' : undefined
		},
		reset: function() {
			app.number = 0
			app.message2 = undefined
		}
	}
})

