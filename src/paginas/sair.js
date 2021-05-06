const get = async (request, response) => {
	let sess = request.session
	
    sess.destroy(err => {
        if(err) return console.log(err)
        response.redirect('/')
    })
}

const post = async (request, response) => {
	//...
}

module.exports = { get, post }