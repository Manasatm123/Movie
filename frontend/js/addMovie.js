document.getElementById('movieForm').addEventListener('submit',async function (e) {
    e.preventDefault();
    console.log("movieForm");

    title=document.getElementById('title').value,
    language=document.getElementById('language').value,
    duration=document.getElementById('duration').value,
    catogery=document.getElementById('catogery').value,
    rating=document.getElementById('rating').value,
    releaseDate=document.getElementById('releaseDate').value,
    certificate=document.getElementById('certificate').value,
    screen=document.getElementById('screen').value
    
    console.log(title,language,duration,catogery,rating,releaseDate,certificate,screen,pic,pic1);


    const res=await fetch('http://localhost:3001/api/add',{
        method:"POST",
        headers:{"content-Type":'application/json'},
        body:JSON.stringify({title,language,duration,catogery,rating,releaseDate,certificate,screen,pic,pic1})
    })
    console.log(res);
    
    const data=await res.json()
    if(res.status==201){
        alert(data.msg)
        window.location.href="../index.html"
    }
    else{
        alert(data.error)
    }
 })

 let pic1
 let pic
 async function picture() {
    const file=document.getElementById("pic").files[0]
      pic=await convertBase641(file)
    console.log(pic);
    document.getElementById('img').src=pic
}

async function picture1() {
    const file=document.getElementById("pic1").files[0]
      pic1=await convertBase642(file)
    console.log(pic1);
    document.getElementById('img1').src=pic1
}


function convertBase641(file) {
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();

        fileReader.readAsDataURL(file)
        fileReader.onload=()=>{
            resolve(fileReader.result)

        }
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })
}
function convertBase642(file) {
    return new Promise((resolve,reject)=>{
        const fileReader=new FileReader();

        fileReader.readAsDataURL(file)
        fileReader.onload=()=>{
            resolve(fileReader.result)

        }
        fileReader.onerror=(error)=>{
            reject(error)
        }
    })
}