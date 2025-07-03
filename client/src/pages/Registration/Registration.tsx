import "./Registration.css";

function Registration() {
  return (
    <main className="registration-page">
      <form>
        <label htmlFor="email">Votre email</label>
        <input
          id="email"
          type="email"
          placeholder="Ex: exemple@domaine.com"
          name="email"
        />
        <label htmlFor="password">Votre mot de passe</label>
        <input
          type="password"
          placeholder="Entrez votre mot de passe"
          name="password"
        />
        <label htmlFor="confirm-password">Confirmez votre mot de passe</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirmez votre mot de passe"
          name="confirmPassword"
        />
        <button type="button">Valider</button>
      </form>
    </main>
  );
}
export default Registration;
