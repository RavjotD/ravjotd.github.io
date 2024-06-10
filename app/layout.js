
import TransitionProvider from "./components/transitionProvider";
import './globals.css'


// Root page of children. Surrounding children elements from Transition page layout.
export const metadata = {
  title: 'Ravjot Duhra',
  description: "Ravjot Duhra's Portfolio",
  icons:{
icon:[
  "/favicon.png",
], 


  },
  manifest:"/site.webmanifest"
}

export default function RootLayout({ children }) {
  return (
  
    
    <html lang="en">
      
      <body>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
    
  );
}
