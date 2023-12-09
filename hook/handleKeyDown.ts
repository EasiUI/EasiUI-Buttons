import React,{useState,useEffect} from 'react'
interface Props{
    navigationItems:string[]   
}

export  function handleKeyDown({navigationItems}:Props) {
    const [isOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState<number>(0)

//@ts-ignore
 const handleKeyDown = (e) => {
    if (isOpen) {
      e.preventDefault()

      switch (e.keyCode) {
        // KeyDown
        case 40:
          if (currentItem === navigationItems.length - 1) {
            setCurrentItem(0)
          } else {
            setCurrentItem(currentItem + 1)
          }
          break
        // KeyUp
        case 38:
          if (currentItem === 0) {
            setCurrentItem(navigationItems.length - 1)
          } else {
            setCurrentItem(currentItem - 1)
          }
          break
        // Escape
        case 27:
          setCurrentItem(1)
          setIsOpen(false)
          break
        default:
          break
      }
    }
  }
  useEffect(() => {
    
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

}
