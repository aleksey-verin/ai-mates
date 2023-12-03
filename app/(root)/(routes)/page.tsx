import { UserButton } from '@clerk/nextjs'

const RootPage = () => {
  return (
    <>
      <div>Root Page (Protected)</div>
      <UserButton afterSignOutUrl='/' />
    </>
  )
}

export default RootPage
