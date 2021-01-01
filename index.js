var people = (function () {
    var people = ["will", "Steve"];

    //Cache DOM
    var el = document.querySelector('#peopleModule');
    var button = document.querySelector('button');
    var input = document.querySelector('input');
    var ul = document.querySelector('ul');
    //var template = document.querySelector('#people-template').html();

    //bind events
    button.addEventListener('click', addPerson);
    ul.addEventListener('click', deleteParson);

    //
    render();

    function render() {
        ul.innerHTML = '';
        people.forEach((person)=>{
            let li = createListItem(person);
            ul.appendChild(li);
        });
    }

    function createListItem(person){
        //create list element
        let li = document.createElement('li');
        li.setAttribute('id', person);
        li.innerText= person;
        return li;
    }

    function addPerson() {
        people.push(input.value);
        render();
        input.value = '';
    }

    function deleteParson(e) {
        if (e.target.tagName == 'LI') {
            let item = e.target.id;
            people.splice(item, 1);
            render();
        }
    }

    return {
        addPerson: addPerson,
        deleteParson: deleteParson
    };
})();