import { useState } from "react"

export default function Input({text, onChangeText}) {
  return(
    <>
      <input value={text} onChange={onChangeText} />
    </>
  )
}