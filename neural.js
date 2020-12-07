<script>

// BrainJS is a library to develop neural networks in JS
const brain = require('brain.js')

// Producing an instance
var net = new brain.NeuralNetwork()

// Training data for neural net
var training_data = [
    {input: [0, 0], output: [0]},
    {input: [0, 1], output: [1]},
    {input: [1, 0], output: [1]},
    {input: [1, 1], output: [0]}
]

// Training the neural net
net.train(training_data)

//Printing to display
console.log(net.run([0, 0]))
console.log(net.run([1, 0]))

</script>