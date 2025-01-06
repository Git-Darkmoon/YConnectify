"use server"

import { signIn, signOut } from "@/auth"

export const SignInGithubAction = async () => {
  await signIn("github")
}

export const SignOutAction = async () => {
  await signOut({ redirectTo: "/" })
}
