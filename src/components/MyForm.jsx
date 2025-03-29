import React from "react";

function MyForm() {
  return (
    <div>
      <form>
        <label>email</label>
        <input type="email" placeholder="email" />

        <label>password</label>
        <input type="password" placeholder="password" />

        <button type="submit">click</button>
      </form>
    </div>
  );
}



export default MyForm;
