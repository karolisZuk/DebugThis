const usersData = [
    {name: 'Tom', age: 34, phone: '123 456 789'},
    {name: 'John', age:19, phone: '5543 345435 354'},
    {name: 'Carl', age: 32, phone: '54534 534 5343'},
    {nane: 'Poly', age:19, phone: '54534 534 5343'},
    {name: 'Joshua', age: 32, phone: '54534 534 5343'},
    {name: 'John', age:19, phone: '500 534 5343'},
    {name: 'Carl', age: 32, phone: '500 534 5343'},
    {name: 'John', age:19, phone: '123 456 789'},
    {name: 'Carl', age: 32, phone: '500 534 5343'}
]

findUser = () => {
    let name = document.getElementById('search').value;
    let result = '';
    result = usersData.filter( user => user.name === name );
    document.getElementById('mylist').innerHTML = "";
    displayUsersOnScreen(resulta);
}

displayUsersOnScreen = (users) => {
    if(!users) {
        users = usersData;
    }
    let htmlListElem = document.getElementById('mylist');
    users.forEach(user => {
        htmlListElem.insertAdjacentHTML(`beforeend`,
            `<li id="user-li" class="list-group-item d-flex">
                <div>
                    <small>name:</small> ${user.name}<br>
                    <small>age:</small> ${user.age}
                </div>
                <div class="ml-auto">
                    <small>phone: ${user.phonenr}</small>
                </div>
            </li>`
                
            );
    });
}