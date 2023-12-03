import { PropsWithChildren } from "react";

const RootLayout = ({children}: PropsWithChildren) => {
  return ( <div className=''>
    {children}
  </div> );
}
 
export default RootLayout;