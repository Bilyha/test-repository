const express = require('express');
const cors = require('cors');
const app = express();

const arr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis diam non velit suscipit, at sagittis enim gravida. Integer sagittis neque ut mi feugiat rutrum. Nam eu euismod nulla. Nunc vitae tempus erat, iaculis dictum nunc. Cras sodales tincidunt lorem. Nunc ullamcorper leo tincidunt, fermentum purus ac, tempus dui. Mauris et eleifend tortor, quis fermentum nisl. Vestibulum nibh nisl, dapibus sed ipsum imperdiet, pretium fringilla odio. Sed elementum ante sit amet mattis porta. Nullam auctor risus sed sollicitudin egestas.'.split(' ');

app.use(cors());

const MAX_RESULTS_COUNT = 10

app.get('/:value?', (req, res) => {
    const { value } = req.params;
    if (!value) {
        res.send([]);
    } else {
        const randomValue = Math.floor(Math.random() * arr.length - MAX_RESULTS_COUNT);
        const resp = arr.slice(randomValue, randomValue + MAX_RESULTS_COUNT);

        res.send(resp)
    }
})

app.listen(8000)