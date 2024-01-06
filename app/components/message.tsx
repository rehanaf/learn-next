'use client'

export function Message(props: any) {
  return (
    <div className="group mt-4 relative w-full p-2 border-2 odd:border-sky-400 even:border-yellow-400 rounded-lg">
      <div className="absolute -top-4 text-xs py-1 px-6 border-2 group-odd:border-sky-400 group-even:border-yellow-400 rounded-full min-w-32 bg-black z-10">{props.name}</div>
      <p>{props.message}</p>
    </div>
  )
}