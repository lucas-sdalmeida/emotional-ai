import style from './page.module.css'

import CredentialsForm from './components/CredentialsForm'

export default function LoginPage() {
    return (
        <main className={ style.login }>
            <section>
                <header>
                    <h1>Login</h1>
                </header>
                <div>
                    <CredentialsForm></CredentialsForm>
                </div>
            </section>
        </main>
    )
}
