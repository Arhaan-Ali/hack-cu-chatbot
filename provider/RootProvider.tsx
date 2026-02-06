import React from 'react'

interface RootProviderProps {
  children?: React.ReactNode
}

const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <main className="w-full min-h-dvh bg-background text-foreground flex flex-col items-center">
      {children}
    </main>
  )
}

export default RootProvider