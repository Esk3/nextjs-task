import { logoutUser } from "@/lib/data/memoryDb";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function Page() {
  async function logout() {
    "use server"
    const store = await cookies();
    const token = store.get("session-token")?.value;
    if (token) logoutUser(token);
    store.delete("session-token");
    redirect("/");
  }
  return <div>
    <h1>Logout</h1>
    <form action={logout}>
      <input type="submit" value="logout" />
    </form>
  </div>;

}
