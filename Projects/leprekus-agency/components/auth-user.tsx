import { UserButton, useAuth } from '@clerk/nextjs';
import Link from './ui/link';

export default function AuthUser() {
    const user = useAuth()
  return (
    <div className='flex gap-2 pr-8'>
        {
            user.isSignedIn ?
        <>
        <UserButton afterSignOutUrl='/'/>
        <Link href='/dashboard'>Dashbaord</Link>
        </>
        :
        <>
            <Link variant='outline' size='sm' href='sign-in'>Sign in</Link>
            <Link size='sm' href='sign-up'>Sign up</Link>
        </>
        }
    </div>
  )
}