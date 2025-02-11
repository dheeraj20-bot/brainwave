import { smallSphere, stars } from '../assets'
import Heading from './Heading'
import PricingList from './PricingList'
import Section from './Section'
import {LeftLine, RightLine} from "../design/Pricing"

const Pricing = () => {
  return (
    <Section id="pricing" className="overflow-hidden">
         <div className='container relative z-2'>
             <div className='hidden relative justify-center mb-[6.4rem] lg:flex'>
                 <img src={smallSphere} className=' relative z-1' width={255} 
                 height={255} alt='sphere'/>
                  <div className='absolute top-1/2 left-1/2 w-[60rem]
                   -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                <img  className='w-full' width={950} height={400} src={stars} alt="stars" />
              </div>
             </div>
                      
             <Heading 
             className="text-center"
             tag="Get Started with Brainwave"
             title="Pay once, use forever"      
             />

             <div  className='relative'>
              <PricingList/>
              <LeftLine/>
              <RightLine/>
             </div>

             <div className='flex justify-center mt-10'>
                  <a className='text-xs font-code  tracking-wider 
                  uppercase border-b font-bold' href='/pricing'>See the full details</a>
             </div>
         </div>
    </Section>
  )
}

export default Pricing