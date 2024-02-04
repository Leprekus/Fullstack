import { useCommandsMenuStore } from '../../../stores/commands-modal-store'

export default function CommandsMenuModal() {
    const display = useCommandsMenuStore(state => state.display)
    if(!display) return null

  return (
    <div className='bg-red-400 aboslute top-0 right-0'>commands-menu-modal</div>
  )
}