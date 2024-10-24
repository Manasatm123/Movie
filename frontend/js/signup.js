// document.getElementById('form').addEventListener('submit',async function (e) {
//     e.preventDefault();

//     username=document.getElementById('username').value
//     emailphone=document.getElementById('emailphone').value
//     password=document.getElementById('password').value
//     confirmpassword = document.getElementById('confirmpassword').value

    
//     console.log(username,emailphone,password,confirm-password)

//     const res=await fetch('http://localhost:3001/api/addUser',{
//         method:"POST",
//         headers: { "Content-Type": 'application/json' },
//         body:JSON.stringify({username,emailphone,password,confirmpassword})
//     })
//     console.log(res);
    
//     const data=await res.json()
//     if(res.status==201){
//         alert(data.msg)
//         window.location.href="../index.html"
//     }
//     else{
//         alert(data.error)
//     }
//  })

document.getElementById('signupForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const emailphone = document.getElementById('emailphone').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;

    console.log(username, emailphone, password, confirmpassword);

    try {
        const res = await fetch('http://localhost:3001/api/addUser', {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify({ username, emailphone, password, confirmpassword })
        });

        const data = await res.json();
        if (res.status === 201) {
            alert(data.msg);
            window.location.href = "./signin.html";
        } else {
            alert(data.error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to sign up. Please try again.');
    }
});
