import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <p>Hello Admin Dashboard</p>
      <div className='p-4'>
        <Button variant={"destructive"}>Admin</Button>
      </div>
    </div>

  )
}
