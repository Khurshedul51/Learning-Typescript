type User = {
    name: string,
    email: string,
    isActive: boolean
}

const createUser = (name: string, email: string, isActive: boolean): User => {
    return {name, email, isActive}
}

const user = createUser("akibul ALam", "sakib@email.com", true)

console.log(user)