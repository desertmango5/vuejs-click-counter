
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
			app.number >= 25 ? app.message2 = 'There has to be a better way to spend your time!' : undefined
			app.number >= 50 ? app.message2 = 'You\'re still here?!?' : undefined
			app.number >= 250 ? app.message2 = 'Finger tired yet??' : undefined
			app.number >= 500 ? app.message2 = 'At this point you may as well keep going...' : undefined
			app.number >= 1000 ? app.message2 = '1000... Is that all you got?' : undefined
			app.number >= 2000 ? app.message2 = 'My son\'s record is 2222!' : undefined
			app.number >= 2223 ? app.message2 = 'Congratulation! You have out-clicked a 12 year old.' : undefined
		},
		reset: function() {
			app.number = 0
			app.message2 = undefined
		}
	}
})

