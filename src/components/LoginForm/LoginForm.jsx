import './LoginForm.css';

export const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.value);
    form.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label">
        Email
        <input type="email" name="email" />
      </label>
      <label className="label">
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
};
