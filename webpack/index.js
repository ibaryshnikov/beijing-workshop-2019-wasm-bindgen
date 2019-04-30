import('./pkg') // webpack
    .then(wasm => {
        const array = [2, 5];

        document
            .body
            .innerHTML += array.join(', ');

        const newArray = wasm.updateArray(array);

        document
            .body
            .innerHTML += `<br>${newArray.join(', ')}`

        wasm.insertDiv();
    })
    .catch(console.error);
