import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div style={{ padding: '50px', fontFamily: 'Arial' }}>
      <h1>🚀 ExsFrameworks Website</h1>
      <p>Website dengan Clerk Authentication!</p>
      
      <div style={{ marginTop: '20px' }}>
        <SignedOut>
          <SignInButton mode="modal">
            <button style={{ 
              padding: '10px 20px', 
              background: 'blue', 
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Sign In / Sign Up
            </button>
          </SignInButton>
        </SignedOut>
        
        <SignedIn>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <UserButton afterSignOutUrl="/" />
            <span>You are signed in!</span>
          </div>
          <p style={{ marginTop: '10px' }}>
            <a href="/dashboard" style={{ color: 'green' }}>Go to Dashboard →</a>
          </p>
        </SignedIn>
      </div>
    </div>
  )
}
