import { Search } from "lucide-react"

export default function InputHero() {
  return (
    <div className="  flex items-center"> 
        <div className="  flex items-center size-fit">
            <input type="text"  className="border-gray-200 border rounded-l-2xl bg-white py-2"/>
        </div>
        <div className=" flex items-center size-fit">
            <input type="text" className="border-gray-200 border-l-none border bg-white py-2"/>
        </div>
        <div className="flex items-center size-fit border  border-gray-300 rounded-r-2xl p-[11px] text-white bg-link-green  ">
            <Search  className="size-5"/>
        </div>
    </div>
  )
}
