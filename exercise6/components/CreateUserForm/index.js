export default function CreateUserForm() {
    return(
        <div>
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" required />
            
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" required />
            
            <button type="submit">Create User</button>
        </form>
        </div>
    );
}