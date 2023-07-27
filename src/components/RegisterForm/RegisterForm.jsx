import './RegisterForm.css';

export const RegisterForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.value);
    form.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label">
        Username
        <input type="text" name="name" />
      </label>
      <label className="label">
        Email
        <input type="email" name="email" />
      </label>
      <label className="label">
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
