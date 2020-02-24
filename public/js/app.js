const getAllChirps = () => {
    $.ajax({
        type: "GET",
        url: "/api/chirps/"
    })
        .then(chirps => {
            $('ul').empty();
            chirps.forEach(chirp => {
                $('ul').append(
                `<li id=${chirp.id} class="list-group-item mb-3 shadow"> 
                    <div class="row justify-content-md-right">
                        <div class="col-8 mt-4">
                            <p class="col overflow-auto">${chirp.text}</p>
                        </div>
                        <div class="col-4">
                            <button class="btn btn-primary id="updateBtn" data-toggle="modal" data-target="#updateModal" onclick="updateChirp(${chirp.id},'${chirp.text}')"> Update </button>
                            <button class="btn btn-secondary id="deleteBtn" onclick="deleteChirp(${chirp.id})"> X </button>
                            <div class="d-flex justify-content-end mt-3">
                            <a class="col-6 text-muted" href="details.html">ID:${chirp.id} </a>
                        </div>
                        </div>
                    </div>
                </li>`)
            })
        })
};
getAllChirps();

const postChirp = (text) => {
    let newChirp = {
        text
    }
    $.ajax({
        type: "POST",
        url: '/api/chirps/',
        data: newChirp
    })
        .then(() => getAllChirps());
};

$('.submitBtn').click(e => {
    e.preventDefault();
    let text = $('#text').val();
    postChirp(text);
    $('#text').val('');
});

const deleteChirp = (id) => {
    $.ajax({
        type: "DELETE",
        url: '/api/chirps/' + id,
    })
        .then(() => {
            getAllChirps();
        })
}

const updateChirp = (id, text) => {
    $('#newInput').val(text);    
};

$('#saveBtn').on('click', function () {
    let newMsg = $('#newInput').val();
    let id = $('#edit-id').text()
    $.ajax({
        type: "PUT",
        url: '/api/chirps/' + id,
        data: {
            text: newMsg
        }
    })
    .then(()=>{
        getAllChirps();
    })
})