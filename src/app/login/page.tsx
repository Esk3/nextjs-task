import { createUser, getUserFromSessionToken, loginUser } from "@/lib/data/memoryDb";
import { cookies } from "next/headers";

export default async function Page() {
  "use server"
  const store = await cookies();
  const token = await store.get("session-token");
  const { ok, } = await getUserFromSessionToken(token?.value ?? "");
  const msg = ok ? <div>logged in as: {ok.username}</div> : <div>Not logged in</div>;
  async function login(formdata: FormData) {
    "use server"
    const store = await cookies();
    const username = formdata.get("username")?.toString();
    if (!username) return;
    createUser(username);
    const { ok } = await loginUser(username);
    console.log(ok);
    store.set("session-token", ok!);
  }
  return <div>
    <h1>Login</h1>
    {msg}
    <form action={login}>
      <input type="text" name="username" autoFocus />
      <input type="submit" value="login" />
    </form>
  </div>
}
