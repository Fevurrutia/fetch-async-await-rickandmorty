const cardDinamicas = document.getElementById('card-dinamicas')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        loadingData(true)

        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = await res.json()
        pintarCard(data)
    } catch (error) {
        console.log(error)
    } finally{
        loadingData(false)
    }   
}

const pintarCard = (data) => {
    data.results.forEach(item => { 
        const clone = templateCard.cloneNode(true)
        clone.querySelector('h5').textContent = item.name
        clone.querySelector('img').setAttribute('src', item.image)
        clone.querySelector('p').textContent = item.species
        fragment.appendChild(clone)
    } );
    cardDinamicas.appendChild(fragment)
}

const loadingData = (estado) => {
    const loading = document.getElementById('loading')
    if(estado){
        loading.classList.remove('d-none')
    } else{
        loading.classList.add('d-none')
    }
}