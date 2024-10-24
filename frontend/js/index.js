async function getMovies() {
    const token=localStorage.getItem("token")
    const res = await fetch("http://localhost:3001/api/getMovies",{
    headers:{"authorization":`Bearer ${token}`}
})
    const movie=await res.json();
    console.log(movie);
    document.getElementById("user").textContent=movie.user
    str=``;
    movie.data.map((data)=>{
        str+=`
            <div>
                    <a href="pages/movie.html?id=${data._id}">
                        <div class="card-img">
                            <img src="${data.pic}"
                                width="225"
                                height="380" alt>
                        </div>
                        <div>
                            <div class="s1-text-1"
                                style="padding-top: 5px;"><h3>${data.title}</h3></div>
                            <div class="s1-text-2"
                                style="padding-top: 5px;"><span>${data.catogery}</span></div>
                        </div>
                    </a>
                </div>
        `
    });
    document.getElementById('sec-1-card').innerHTML=str; 
}
getMovies()