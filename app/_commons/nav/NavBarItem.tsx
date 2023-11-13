import Link from "next/link";
import { useEffect, useState } from "react"

interface NavBarItemProps {
  iconName: string;
  url: string
}

export default function NavBarItem ({ iconName, url }:NavBarItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    if (iconName === 'home') return
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    if (iconName === 'home') return
    setIsHovered(false)
  }

  // useEffect(()=>{
  // }, [isHovered])

  return (
      <div className={`flex justify-center items-center ${iconName === 'home' ? "flex-[1.2] mb-8" : "flex-1"}`}
      >
        <Link href={url}>
          <img src={`/assets/nav/icon_${iconName}${isHovered ? '_hovered' : ''}.png`} alt={`icon_${iconName}`} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={iconName === 'home' ? "hover:scale-125" : ''}
          />
        </Link>
      </div>
  )
}
