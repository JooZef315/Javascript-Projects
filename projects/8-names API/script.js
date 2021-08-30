var list = document.getElementsByTagName('ul')[0];
var btns = document.getElementsByTagName('input');
var tab = document.getElementById('tabs');

var users = fetch('https://jsonplaceholder.typicode.com/users');

var active = (btns) => {    
    [...btns].forEach((i) => {                
        i.addEventListener('click', () => {
            [...btns].forEach((i) => {
                i.removeAttribute('class');            
            });
            i.classList.toggle("active"); 
        });   
    });
}

users.then((res) => {    
    return res.json();
}).then((res) => {            
    render_users(res);    
}).catch(() => {
    alert('error getting users');});



var render_title = (titles) => {
    for (let i in titles) {
        list.innerHTML = '';
        titles.forEach((title) => {
                var li = document.createElement('li');
                li.innerText = title.title;
                list.appendChild(li);
            });
    }    
};

var fetch_titles = async (id) => {
    try {
        var title_url = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);        

        var titles_json = await title_url.json();        
        render_title(titles_json);
        
    } catch (error) {
        alert(error)
    }
}

var first_render = (btn_id) => {
    document.getElementById(`${btn_id}`).classList.add("active"); 
    fetch_titles(btn_id)
}

var render_users = (users) => {
    for (let i in users) {
        var btn = document.createElement('input');
        btn.setAttribute('type', 'button');
        btn.setAttribute('id', users[i].id);
        btn.value = users[i].name;        
        tab.appendChild(btn);       

        btn.addEventListener('click', (e) => {            
            fetch_titles(e.target.id)
        })
    }
    first_render(users[0].id)
    active(document.getElementsByTagName('input'));
};

