'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import Link from 'next/link'

export default function SignUpPage() {
  return <main className="bg-background text-foreground w-full">
    <section className="mx-auto flex min-h-dvh w-full max-w-6xl items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <SignUp.Root>
          <SignUp.Step name="start">
            <div className="rounded-2xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
              <header className="space-y-2 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Create your account
                </p>
                <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                  Start with SoilSense
                </h1>
                <p className="text-sm text-muted-foreground">
                  Use a social account or your email to sign up.
                </p>
              </header>

              <div className="mt-6 grid gap-3">
                <Clerk.Loading scope="provider:apple">
                  {(isLoading) => (
                    <Clerk.Connection
                      name="apple"
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-muted/40"
                      disabled={isLoading}
                    >
                      <Clerk.Icon className="h-4 w-4" />
                      Continue with Apple
                    </Clerk.Connection>
                  )}
                </Clerk.Loading>

                <Clerk.Loading scope="provider:github">
                  {(isLoading) => (
                    <Clerk.Connection
                      name="github"
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-muted/40"
                      disabled={isLoading}
                    >
                      <Clerk.Icon className="h-4 w-4" />
                      Continue with GitHub
                    </Clerk.Connection>
                  )}
                </Clerk.Loading>

                <Clerk.Loading scope="provider:google">
                  {(isLoading) => (
                    <Clerk.Connection
                      name="google"
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-muted/40"
                      disabled={isLoading}
                    >
                      <Clerk.Icon className="h-4 w-4" />
                      Continue with Google
                    </Clerk.Connection>
                  )}
                </Clerk.Loading>
              </div>

              <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                or sign up with email
                <span className="h-px flex-1 bg-border" />
              </div>

              <Clerk.GlobalError className="mb-4 rounded-lg border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive" />

              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Clerk.Field name="firstName" className="space-y-2">
                    <Clerk.Label className="text-sm font-medium text-foreground">First name</Clerk.Label>
                    <Clerk.Input
                      type="text"
                      autoComplete="given-name"
                      className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                    />
                    <Clerk.FieldError className="text-xs text-destructive" />
                  </Clerk.Field>
                  <Clerk.Field name="lastName" className="space-y-2">
                    <Clerk.Label className="text-sm font-medium text-foreground">Last name</Clerk.Label>
                    <Clerk.Input
                      type="text"
                      autoComplete="family-name"
                      className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                    />
                    <Clerk.FieldError className="text-xs text-destructive" />
                  </Clerk.Field>
                </div>

                <Clerk.Field name="emailAddress" className="space-y-2">
                  <Clerk.Label className="text-sm font-medium text-foreground">Email</Clerk.Label>
                  <Clerk.Input
                    type="email"
                    autoComplete="email"
                    required
                    className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                  <Clerk.FieldError className="text-xs text-destructive" />
                </Clerk.Field>

                <Clerk.Field name="password" className="space-y-2">
                  <Clerk.Label className="text-sm font-medium text-foreground">Password</Clerk.Label>
                  <Clerk.Input
                    type="password"
                    autoComplete="new-password"
                    required
                    className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                  />
                  <Clerk.FieldError className="text-xs text-destructive" />
                </Clerk.Field>

                <SignUp.Action
                  submit
                  className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Create account
                </SignUp.Action>
              </div>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/sign-in" className="font-semibold text-primary hover:text-primary/80">
                  Sign in
                </Link>
              </p>
            </div>
          </SignUp.Step>

          <SignUp.Step name="verifications">
            <SignUp.Strategy name="email_code">
              <div className="rounded-2xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
                <header className="space-y-2 text-center">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Verify your email
                  </p>
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    Enter your verification code
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    We sent a code to your email address.
                  </p>
                </header>

                <div className="mt-6 space-y-4">
                  <Clerk.Field name="code" className="space-y-2">
                    <Clerk.Label className="text-sm font-medium text-foreground">Verification code</Clerk.Label>
                    <Clerk.Input
                      type="otp"
                      className="h-11 w-full rounded-lg border border-border bg-background px-3 text-center text-lg tracking-[0.3em] text-foreground shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
                    />
                    <Clerk.FieldError className="text-xs text-destructive" />
                  </Clerk.Field>

                  <SignUp.Action
                    submit
                    className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                  >
                    Verify email
                  </SignUp.Action>

                  <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                    <SignUp.Action
                      navigate="start"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Back
                    </SignUp.Action>
                    <SignUp.Action
                      resend
                      className="text-primary hover:text-primary/80"
                      fallback={({ resendableAfter }) => (
                        <span className="text-muted-foreground">Resend in {resendableAfter}s</span>
                      )}
                    >
                      Resend code
                    </SignUp.Action>
                  </div>
                </div>
              </div>
            </SignUp.Strategy>
          </SignUp.Step>
        </SignUp.Root>
      </div>
    </section>
  </main>
}
