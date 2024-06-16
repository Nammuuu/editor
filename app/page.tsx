// import Sidebar from './components/Sidebar';
// import TopBar from './components/TopBar';
// import Preview from './components/Preview';
// import { BuilderProvider } from './context/BuilderContext';
// export default function Home() {
//   return (


//     <BuilderProvider>
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1 relative">
//         <TopBar />
//         <Preview />
//       </div>
//     </div>
//   </BuilderProvider>
   
//   );
// }



import React from 'react';
import  {BuilderProvider} from './context/BuilderContext';
import DndProviderWrapper from './context/DndProviderWrapper';
import Sidebar from './components/Sidebar';
import Preview from './components/Preview';
import SettingsSidebar from './components/SettingsSidebar';
// import TopBar from './components/TopBar';
import '../config/fontawesome';
const Home = () => {
  return (
    <DndProviderWrapper>
      <BuilderProvider>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 relative">
            {/* <TopBar /> */}
            <Preview />
          </div>
          <SettingsSidebar />
        </div>
      </BuilderProvider>
    </DndProviderWrapper>
  );
};

export default Home;

