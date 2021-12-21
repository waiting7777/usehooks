import { useState } from "react"
import { useEventListener } from "."

export interface MouseState {
  pageX: number;
  pageY: number;
}

function useMouse() {
  const [state, setState] = useState<MouseState>({
    pageX: 0,
    pageY: 0
  });


  const mouseHandler = (event: MouseEvent) => {
    setState({
      pageX: event.pageX,
      pageY: event.pageY
    })
  }

  useEventListener('mousemove', mouseHandler)

  return state
}

export default useMouse