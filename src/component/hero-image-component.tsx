
export default function HeroImage() {
  return (
    <div className="flex-1 flex justify-end items-center">
      <div className="border-link-green border-2 rounded-2xl w-[360px] h-[400px] relative ">
       <img src="/hero-image-guy.png" className="w-full h-full object-cover rounded-2xl -translate-x-4 -translate-y-4"></img>
      </div>
    </div>
  )
}
