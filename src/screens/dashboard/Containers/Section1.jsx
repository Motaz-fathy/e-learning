import { PrimCard } from "../../../shared/Cards"

export const Section1 = () => {
    return <div className='w-full  flex justify-between items-center gap-2'>
     <PrimCard arg={"w-1/4 h-auto"} color={"-green-400"} title={"Student"} number={2000}/>
     <PrimCard arg={"w-1/4 h-auto"} color={"-red-400"} title={"Parent"} number={500}/>
     <PrimCard arg={"w-1/4 h-auto"} color={"-blue-400"} title={"Teacher"} number={50}/>
     <PrimCard arg={"w-1/4 h-auto"} color={"-yellow-400"} title={"Admin"} number={4}/>
    </div>
  }