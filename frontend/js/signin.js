document.getElementById('signinform').addEventListener('submit', async function (e) {
    e.preventDefault();

    
    const emailphone = document.getElementById('emailphone').value;
    const password = document.getElementById('password').value;
    

    console.log( emailphone, password);

    
        const res = await fetch('http://localhost:3001/api/login', {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify({  emailphone, password})
        });

        console.log(res);
        

        const data = await res.json();
        console.log(data);

        if (res.status==200) {
            
            localStorage.setItem('token',data.token);
            window.location.href="../index.html"
        }else{
            alert(data.error)
        }
        
    
    
   
});
