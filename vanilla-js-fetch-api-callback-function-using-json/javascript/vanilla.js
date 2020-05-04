        // const centerDiv = document.querySelector("#centerDiv");
        // const centerDivChild = document.querySelector("#centerDivChild");
        let sagar = fetch('https://randomuser.me/api/?results=4')
                .then(data => {
                    return data.json()
                }).then(data2 => {
                    for (const dataValue of data2.results) {
                        var board = document.createElement('div');
                        var img = document.createElement('img');
                        var email = document.createElement('p');
                        var dob = document.createElement('p');
                        var address = document.createElement('p');
                        var phone = document.createElement('p');
                        var password = document.createElement('p');
                        img.setAttribute('src', dataValue.picture.large );
                        email.innerHTML = dataValue.email;
                        dob.innerHTML = dataValue.dob.date;
                        address.innerHTML = dataValue.location.country;
                        phone.innerHTML = dataValue.phone;
                        password.innerHTML = dataValue.login.password;
                        document.getElementById('centerdiv').appendChild(board);
                        board.appendChild(img);
                        board.appendChild(email);
                        board.appendChild(dob);
                        board.appendChild(address);
                        board.appendChild(phone);
                        board.appendChild(password);
                      
                    }
                });
    