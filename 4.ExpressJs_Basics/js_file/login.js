export function login(){
    return `
    <form action='/submit' method='post'>
    <input type='email' placeholder='enter email'>
    <br>
    <br>
    <input type='password' placeholder='enter password'>
    <br>
    <br>
    <button>Submit</button>
    </form>
    <a href='/'>Go to home</a>
    `
}
