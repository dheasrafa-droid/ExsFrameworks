import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const { userId } = await auth()
  
  if (!userId) {
    redirect('/')
  }
  
  return (
    <div style={{ padding: '50px' }}>
      <h1>Dashboard</h1>
      <p>User ID: {userId}</p>
      <p>Protected content - hanya bisa diakses setelah login</p>
      <a href="/" style={{ color: 'blue' }}>← Back to Home</a>
    </div>
  )
}
