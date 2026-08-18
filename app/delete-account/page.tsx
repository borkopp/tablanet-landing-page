import { redirect } from "next/navigation"

export default function DeleteAccountRedirect() {
  redirect("/account-deletion")
}
