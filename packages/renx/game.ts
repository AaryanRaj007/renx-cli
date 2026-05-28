import * as p from "@clack/prompts"
import { setTimeout as sleep } from "timers/promises"

const range = { min: 1, max: 100 }
const target = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
let attempts = 0

p.intro("🎯 Number Guessing Game")

while (true) {
  const guess = await p.text({
    message: `Guess a number between ${range.min}-${range.max}`,
    validate: (val) => {
      const n = Number(val)
      if (!Number.isInteger(n)) return "Enter a whole number"
      if (n < range.min || n > range.max) return `Number must be between ${range.min}-${range.max}`
    },
  })

  if (p.isCancel(guess)) {
    p.cancel("Game cancelled")
    process.exit(0)
  }

  attempts++
  const n = Number(guess)

  if (n === target) {
    const s = p.spinner()
    s.start("Checking...")
    await sleep(500)
    s.stop("Correct!")
    p.outro(`🎉 You got it in ${attempts} ${attempts === 1 ? "try" : "tries"}! The number was ${target}`)
    break
  }

  p.log.warn(n < target ? "⬆️  Go higher!" : "⬇️  Go lower!")
}
