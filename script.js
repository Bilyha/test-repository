const wrapperElement = document.getElementById('wrapper');
const autocompleteElement = document.getElementById('autocomplete');
const input = document.getElementById('input');

const debounce = (func, delay = 300) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

const fetchData = async (value) => {
    const resp = await fetch(`http://localhost:8000/${value || ''}`)
    const data = await resp.json();
    return data;
}

autocompleteElement.addEventListener('click', (e) => {
    input.value = e.target.id;
    autocompleteElement.innerHTML = '';
})

const changeFunc = debounce( async (e) => {
    const { value } = e.target

   const resp =  await fetchData(value);
   autocompleteElement.innerHTML = '';
   if (resp.length) {
        resp.forEach((value) => {
            const pElem = document.createElement('p');
            pElem.innerText = value;
            pElem.classList.add('listElem');
            pElem.setAttribute('id', value);
            autocompleteElement.appendChild(pElem);
        })
   } 
})
