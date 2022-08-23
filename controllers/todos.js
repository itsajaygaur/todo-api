const todosURL = "https://jsonplaceholder.typicode.com/todos"
const userURL = "https://jsonplaceholder.typicode.com/users"


const getAllTodos = async (req, res) => {
    try {
        const response = await fetch(todosURL)
        const data = await response.json()
        data.forEach(item => delete item.userId)
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

const getAllUsers = async (req, res) => {

    try {
        const response = await fetch(userURL)
        const data = await response.json()
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const getUserByID = async (req, res) => {

    try {
        const id = req.params.id
        const response = await fetch(`${userURL}/${id}`)
        const data = await response.json()

        const todos = []
        const responsetodo = await fetch(todosURL)
        const result = await responsetodo.json()
        result.map(item => {
            if (data.id === item.userId) todos.push(item)
            data.todos = todos
        })

        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


module.exports = { getAllTodos, getAllUsers, getUserByID }