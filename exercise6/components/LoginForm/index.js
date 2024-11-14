import styles from '../styles/LoginForm.module.css';

export default function CreateUserForm() {
    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email:</label>
                    <input 
                        className={styles.input}
                        type="email" 
                        name="email" 
                        required 
                    />
                </div>
                
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="password">Password:</label>
                    <input 
                        className={styles.input}
                        type="password" 
                        name="password" 
                        required 
                    />
                </div>
                
                <button className={styles.button} type="submit">
                    Create User
                </button>
            </form>
        </div>
    );
}