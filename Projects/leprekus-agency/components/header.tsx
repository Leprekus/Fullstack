import Navigation from './navigation';
export default function Header() {

  return (
    <div className="
    fixed 
    z-10
    left-0 
    top-0 
    w-full
    border-b 
    border-gray-300 
    h-36
    zinc-200 
    pb-6 
    pt-8 
    backdrop-blur-2xl
    dark:border-neutral-800
    dark:bg-zinc-700/30 
    lg:static 
    lg:w-auto  
    lg:border 
    lg:h-28
    
    lg:p-4 
    ">
      <Navigation/>
    </div>
  )
}