import { useState, useEffect } from "react"
import confetti from 'canvas-confetti'

export const useCheckGift = (users) => {
  const [followingAll, setFollowingAll] = useState(false)

  const checkFullFollow = () => {
    setFollowingAll(users.every(item => item.following === true))
  }

  useEffect(() => {
    followingAll && confetti()
  }, [followingAll])

  return { followingAll, checkFullFollow }
}